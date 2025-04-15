import { isKlaytnAccountKeyType, TxType } from "@kaiachain/ethers-ext";
import { TokenTransferPayload } from "../utils/token";
import { parseEther } from "viem";
import { getAccount } from "../utils/helper";

export const transferNativeToken = async (
  parameters: Omit<
    TokenTransferPayload,
    "type" | "tokenId" | "contractAddress"
  >,
  config: any,
  walletClient: any
) => {
  const sender = walletClient.address || walletClient.account?.address || walletClient.getAddress();
  const accountType: { accType: number } = await await getAccount(
    walletClient,
    sender
  );
  parameters.sender = sender;
  const res: any = {
    from: parameters.sender,
    to: parameters.receiver,
    value: parseEther(parameters.amount.toString()),
    type: undefined,
  };
  if (isKlaytnAccountKeyType(accountType.accType) && walletClient.provider?.kaia) {
    res.type = TxType.ValueTransfer;
  }

  const sentTx = await walletClient.sendTransaction(res);
  return {
    transactionHash: sentTx.hash || sentTx,
  };
};
