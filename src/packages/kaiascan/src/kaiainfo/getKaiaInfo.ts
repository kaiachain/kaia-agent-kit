import { API_DEFAULTS } from "../../../../utils/constants";
import validations from "../../utils/validations";

export const getKaiaInfo = async (parameters: any, config: any) => {
  let KAIA_KAIASCAN_API_KEY = config.KAIA_KAIASCAN_API_KEY;

  validations.checkApiKey(KAIA_KAIASCAN_API_KEY);

  const url = `${API_DEFAULTS.BASE_URL["kaia"]}/kaia`;
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

  let responseText = `Kaia Token Info:\n`;
  responseText += `- USD Price: ${data.klay_price.usd_price}\n`;
  responseText += `- BTC Price: ${data.klay_price.btc_price}\n`;
  responseText += `- USD Price Changes: ${data.klay_price.usd_price_changes}\n`;
  responseText += `- Market Cap: ${data.klay_price.market_cap}\n`;
  responseText += `- Total Supply: ${data.klay_price.total_supply}\n`;
  responseText += `- Volume: ${data.klay_price.volume}\n`;

  return responseText;
};
