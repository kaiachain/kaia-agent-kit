import validations from "../utils/validations";
import { parseEther } from "viem";

const DEFAULT_KAIROS_FAUCET_AMOUNT = "1"; // in KAIA

export const faucetTransfer = async (
  parameters: any,
  config: any,
  walletClient: any
) => {
  let KAIROS_FAUCET_AMOUNT =
    config.KAIROS_FAUCET_AMOUNT || DEFAULT_KAIROS_FAUCET_AMOUNT;
  let { address, network } = parameters;
  network = network ? network.toLowerCase() : "kairos";

  validations.checkAddress(address);
  validations.checkNetwork(network);

  const transactionHash = await walletClient.sendTransaction({
    account: walletClient.account,
    to: address,
    value: parseEther(KAIROS_FAUCET_AMOUNT),
  });

  let responseText = `Successfully transferred ${KAIROS_FAUCET_AMOUNT} test tokens to ${address}. \nTransaction Hash: ${transactionHash}`;
  return responseText;
};
