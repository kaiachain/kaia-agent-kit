import { API_DEFAULTS } from "../../utils/constants";

const service: any = {};

service.getCurrentBalance = async (parameters: any, config: any) => {
  let KAIA_KAIASCAN_API_KEY = config.KAIA_KAIASCAN_API_KEY;
  if (!KAIA_KAIASCAN_API_KEY) {
    throw new Error("Missing API key");
  }
  let { address, network } = parameters;
  network = network ? network.toLowerCase() : "kairos";
  if (network !== "kairos" && network !== "kaia") {
    throw new Error("Invalid network");
  }
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
  return data;
};

export default service;
