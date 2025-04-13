import { isKlaytnAccountKeyType, TxType } from "@kaiachain/ethers-ext";
import { AbiFactory, TokenTransferPayload } from "../utils/token";
import { getAccount } from "../utils/helper";

export const transferErc1155 = async (
  parameters: Omit<TokenTransferPayload, "type">,
  config: any,
  walletClient: any
) => {
  const sender = walletClient.address || walletClient.account.address;
  const accountType: { accType: number } = await await getAccount(
    walletClient,
    sender
  );

  const res: any = {
    from: parameters.sender,
    to: parameters.contractAddress,
    data: new AbiFactory({
      ...(parameters as Partial<TokenTransferPayload>),
      type: "erc1155",
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
