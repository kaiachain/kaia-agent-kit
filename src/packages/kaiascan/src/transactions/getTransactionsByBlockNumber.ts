import { API_DEFAULTS } from "../../../../utils/constants";
import validations from "../../utils/validations";

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

  const transactions = data && data.results.length > 0 
    ? data.results.slice(0, 6).map((transaction: any) => ({
        from: transaction.from,
        to: transaction.to,
        value: transaction.amount,
        type: transaction.transaction_type,
        hash: transaction.transaction_hash
      }))
    : [];

  return {
    blockNumber,
    network,
    transactions,
    totalCount: data.paging?.total_count || 0
  };
};
