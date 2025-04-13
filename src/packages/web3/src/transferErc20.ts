import { AbiFactory, TokenTransferPayload } from "../utils/token.js";
import { isKlaytnAccountKeyType, TxType } from "@kaiachain/ethers-ext";
import { keccak256 } from "viem";
import { getAccount } from "../utils/helper";
async function getContractDecimals(contractAddress: string, walletClient: any) {
  // Step 1: Get the Keccak-256 hash of the function signature
  const functionSignature = new TextEncoder().encode("decimals()");
  const functionHash = keccak256(functionSignature);

  // Step 2: First 4 bytes (8 hex chars) → function selector
  const selector = functionHash.slice(0, 10); // '0x' + 8 char

  try {
    const result = await walletClient.call({
      to: contractAddress,
      data: selector,
    });

    const decimals = parseInt(result, 16);

    console.log("Token decimals:", decimals);
    return decimals;
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
  const sender = walletClient.address || walletClient.account.address;
  const accountType: { accType: number } = await await getAccount(
    walletClient,
    sender
  );

  parameters.amount = await getContractDecimals(
    parameters.contractAddress,
    walletClient
  );

  const res: any = {
    from: parameters.sender,
    to: parameters.contractAddress,
    data: new AbiFactory({
      ...(parameters as Partial<TokenTransferPayload>),
      type: "erc20",
    }).createParams(),
    type: undefined,
  };
  if (isKlaytnAccountKeyType(accountType.accType) && walletClient.provider?.kaia) {
    res.type = TxType.SmartContractExecution;
  }

  const sentTx = await walletClient.sendTransaction(res);
  return {
    transactionHash: sentTx.hash || sentTx,
  };
};
