import { isKlaytnAccountKeyType, TxType } from "@kaiachain/ethers-ext";
// import { TokenTransferPayload, FaucetTransferPayload } from "../utils/token";
import { parseEther } from "viem";
import validations from "../utils/validations";
import { getAccount } from "../utils/helper";
const DEFAULT_KAIROS_FAUCET_AMOUNT = "1"; // in KAIA

export const transferFaucet = async (
  parameters: any,
  config: any,
  walletClient: any
) => {
  try {
    console.log(parameters, config, walletClient);
    let KAIROS_FAUCET_AMOUNT =
      config.KAIROS_FAUCET_AMOUNT || DEFAULT_KAIROS_FAUCET_AMOUNT;
  
    console.log(walletClient.getAddress());
    const sender = walletClient.address || walletClient.account?.address || walletClient.getAddress();
  
    const accountType: { accType: number } = await getAccount(
      walletClient,
      sender
    );
    console.log(accountType);
    parameters.sender = sender;
    validations.checkAddress(sender);
    validations.checkAddress(parameters.receiver);
  
    const res: any = {
      from: sender,
      to: parameters.receiver,
      value: parseEther(KAIROS_FAUCET_AMOUNT.toString()),
      type: undefined,
    };
    if (walletClient.provider?.kaia && isKlaytnAccountKeyType(accountType?.accType)) {
      res.type = TxType.ValueTransfer;
    }
  
    const sentTx = await walletClient.sendTransaction(res);
    console.log(sentTx);
    return {
      transactionHash: sentTx.hash || sentTx,
    };
  } catch(err) {
    console.log(err);
    throw err;
  }

};
