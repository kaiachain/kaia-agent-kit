import { API_DEFAULTS } from "../../../../utils/constants";
import validations from "../../utils/validations";

export const getTransactionsByAccount = async (
  parameters: any,
  config: any
) => {
  let KAIA_KAIASCAN_API_KEY = config.KAIA_KAIASCAN_API_KEY;
  let { address, network } = parameters;
  network = network ? network.toLowerCase() : "kairos";

  validations.checkApiKey(KAIA_KAIASCAN_API_KEY);
  validations.checkAddress(address);
  validations.checkNetwork(network);

  const url = `${API_DEFAULTS.BASE_URL[network]}/accounts/${address}/transactions`;
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

  let accountTransactions = "";
  if (data && data.results.length > 0) {
    data.results.map((transaction: any, index: number) => {
      if (index > 5) return;
      accountTransactions += ` ----------------------------------- \n`;
      accountTransactions += `${index + 1}:\n`;
      accountTransactions += `from: ${transaction.from},\n`;
      accountTransactions += `to: ${transaction.to}, \n`;
      accountTransactions += `value: ${transaction.amount}, \n`;
      accountTransactions += `type: ${transaction.transaction_type}, \n`;
      accountTransactions += `hash: ${transaction.transaction_hash}\n`;
    });
  } else {
    accountTransactions = "No transactions found for this address";
  }

  let responseText = `The transactions for ${address} account on ${network} is ${accountTransactions}`;
  return responseText;
};
