import { API_DEFAULTS } from "../../../utils/constants";
import validations from "../utils/validations";

export const getTransactionsByBlockNumber = async (
  parameters: any,
  config: any
) => {
  let KAIA_KAIASCAN_API_KEY = config.KAIA_KAIASCAN_API_KEY;
  let { blockNumber, network } = parameters;
  network = network ? network.toLowerCase() : "kairos";

  validations.checkApiKey(KAIA_KAIASCAN_API_KEY);
  validations.checkNetwork(network);

  const url = `${API_DEFAULTS.BASE_URL[network]}/transactions?blockNumberStart=${blockNumber}&blockNumberEnd=${blockNumber}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${KAIA_KAIASCAN_API_KEY}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error?.message || response.statusText);
  }

  const data = await response.json();

  let blockTransactions = "";
  if (data && data.results.length > 0) {
    data.results.map((transaction: any, index: any) => {
      if (index > 5) return;
      blockTransactions += ` ----------------------------------- \n`;
      blockTransactions += `${index + 1}:\n`;
      blockTransactions += `from: ${transaction.from},\n`;
      blockTransactions += `to: ${transaction.to}, \n`;
      blockTransactions += `value: ${transaction.amount}, \n`;
      blockTransactions += `type: ${transaction.transaction_type}, \n`;
      blockTransactions += `hash: ${transaction.transaction_hash}\n`;
    });
  } else {
    blockTransactions = "No transactions found for this block";
  }

  let responseText = `The transactions in a block for ${blockNumber} on ${network} is ${blockTransactions}`;
  return responseText;
};
