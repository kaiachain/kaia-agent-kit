import { API_DEFAULTS } from "../../../../utils/constants";
import validations from "../../utils/validations";

export const getAccountOverview = async (parameters: any, config: any) => {
  let KAIA_KAIASCAN_API_KEY = config.KAIA_KAIASCAN_API_KEY;
  let { address, network } = parameters;
  network = network ? network.toLowerCase() : "kairos";

  validations.checkApiKey(KAIA_KAIASCAN_API_KEY);
  validations.checkAddress(address);
  validations.checkNetwork(network);

  const url = `${API_DEFAULTS.BASE_URL[network]}/accounts/${address}`;
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

  let responseText = `Here are the details \nAccount Details:\n`;
  responseText += `Address: ${data.address}\n`;
  responseText += `Account Type: ${data.account_type}\n`;
  responseText += `Balance: ${data.balance}\n`;
  responseText += `Total Transaction Count: ${data.total_transaction_count}\n`;

  return responseText;
};
