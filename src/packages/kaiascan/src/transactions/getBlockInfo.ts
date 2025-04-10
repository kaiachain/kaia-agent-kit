import { API_DEFAULTS } from "../../../utils/constants";
import validations from "../utils/validations";

export const getBlockInfo = async (parameters: any, config: any) => {
  let KAIA_KAIASCAN_API_KEY = config.KAIA_KAIASCAN_API_KEY;
  let { blockNumber, network } = parameters;
  network = network ? network.toLowerCase() : "kairos";

  validations.checkApiKey(KAIA_KAIASCAN_API_KEY);
  validations.checkNetwork(network);

  const url = `${API_DEFAULTS.BASE_URL[network]}/blocks/${blockNumber}`;
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

  let blockInfo = `Block Number: ${data.block_id}\n`;
  blockInfo += `Block Time: ${data.datetime}\n`;
  blockInfo += `Block Hash: ${data.hash}\n`;
  blockInfo += `Total Transaction Count: ${data.total_transaction_count}`;

  let responseText = `The block info for ${blockNumber} on ${network} is ${blockInfo}`;
  return responseText;
};
