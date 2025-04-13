import { API_DEFAULTS } from "../../../../utils/constants";
import validations from "../../utils/validations";

export const getNFTBalance = async (parameters: any, config: any) => {
  let KAIA_KAIASCAN_API_KEY = config.KAIA_KAIASCAN_API_KEY;
  let { address, network } = parameters;
  network = network ? network.toLowerCase() : "kairos";

  validations.checkApiKey(KAIA_KAIASCAN_API_KEY);
  validations.checkAddress(address);
  validations.checkNetwork(network);

  const url = `${API_DEFAULTS.BASE_URL[network]}/accounts/${address}/nft-balances/kip17`;
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

  const totalCount = data.paging.total_count;
  let responseText = `Your account has ${totalCount} NFT Collections. They are as follows:\n`;

  data.results.forEach((item: any, index: number) => {
    responseText += `${index + 1}. Contract address - ${
      item.contract.contract_address
    } | Token count - ${item.token_count}\n`;
  });

  return responseText;
};
