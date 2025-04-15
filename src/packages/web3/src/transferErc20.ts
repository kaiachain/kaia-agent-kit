import { AbiFactory, TokenTransferPayload } from "../utils/token";
import { isKlaytnAccountKeyType, TxType } from "@kaiachain/ethers-ext";
import { keccak256 } from "viem";
import { getAccount } from "../utils/helper";

async function getContractDecimals(contractAddress: string, walletClient: any) {

  try {
    if (walletClient.call) {
      // Step 1: Get the Keccak-256 hash of the function signature
      const functionSignature = new TextEncoder().encode("decimals()");
      const functionHash = keccak256(functionSignature);

      // Step 2: First 4 bytes (8 hex chars) → function selector
      const selector = functionHash.slice(0, 10); // '0x' + 8 char
      const result = await walletClient.call({
        to: contractAddress,
        data: selector,
      });

      const decimals = parseInt(result, 16);

      return decimals;
    } else if (walletClient.read) {

      const result = await walletClient.read({
        address: contractAddress,
        abi: [
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [
              {
                name: "",
                type: "uint8",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
        ],
        functionName: "decimals",
        args: [],
      });
      
      return result?.value || 18;
    } else {
      throw new Error("Problem calculating the decimals");
    }
  } catch (err) {
    console.error("Error fetching decimals:", err);
    throw err;
  }
}

export const transferErc20 = async (
  parameters: Omit<TokenTransferPayload, "type" | "tokenId">,
  config: any,
  walletClient: any
) => {
  try {
    const sender =
      walletClient.address ||
      walletClient.account?.address ||
      walletClient.getAddress();
    const accountType: { accType: number } = await await getAccount(
      walletClient,
      sender
    );
    parameters.sender = sender;
    parameters.amount = await getContractDecimals(
      parameters.contractAddress,
      walletClient
    );

    const res: any = {
      from: sender,
      to: parameters.contractAddress,
      data: new AbiFactory({
        ...(parameters as Partial<TokenTransferPayload>),
        type: "erc20",
      }).createParams(),
      type: undefined,
    };
    if (
      walletClient.provider?.kaia &&
      isKlaytnAccountKeyType(accountType.accType)
    ) {
      res.type = TxType.SmartContractExecution;
    }

    const sentTx = await walletClient.sendTransaction(res);
    return {
      transactionHash: sentTx.hash || sentTx,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
