import validations from "../utils/validations";
import { parseEther } from "viem";

export const nativeTransfer = async (
  parameters: any,
  config: any,
  walletClient: any
) => {
  let amount = 0;
  if (parameters.amount) {
    if (amount < 0) {
      throw new Error("Amount cannot be negative");
    }
  }
  let { address, network } = parameters;
  network = network ? network.toLowerCase() : "kairos";

  validations.checkAddress(address);
  validations.checkNetwork(network);

  const transactionHash = await walletClient.sendTransaction({
    account: walletClient.account,
    to: address,
    value: parseEther(amount.toString()),
  });

  let responseText = `Successfully transferred ${amount} KAIA on ${address} to ${address}. \nTransaction Hash: ${transactionHash}`;
  return responseText;
};
