import { isKlaytnAccountKeyType, TxType } from "@kaiachain/ethers-ext";
import { TokenTransferPayload, FaucetTransferPayload } from "../utils/token";
import { parseEther } from "viem";
import validations from "../utils/validations";
import { getAccount } from "../utils/helper";
const DEFAULT_KAIROS_FAUCET_AMOUNT = "1"; // in KAIA

export const transferFaucet = async (
  parameters: FaucetTransferPayload,
  config: any,
  walletClient: any
) => {
  let KAIROS_FAUCET_AMOUNT =
    config.KAIROS_FAUCET_AMOUNT || DEFAULT_KAIROS_FAUCET_AMOUNT;

  const sender = walletClient.address || walletClient.account.address;

  const accountType: { accType: number } = await getAccount(
    walletClient,
    sender
  );

  validations.checkAddress(sender);
  validations.checkAddress(parameters.receiver);

  const res: any = {
    from: sender,
    to: parameters.receiver,
    value: parseEther(KAIROS_FAUCET_AMOUNT.toString()),
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
