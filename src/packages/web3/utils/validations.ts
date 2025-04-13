import { isAddress } from "viem";

let validations: any = {};

validations.checkApiKey = (apiKey: any) => {
  if (!apiKey) {
    throw new Error("Missing API key");
  }
};

validations.checkAddress = (address: any) => {
  return isAddress(address);
};

validations.checkNetwork = (network: any) => {
  if (network !== "kairos" && network !== "kaia") {
    throw new Error("Invalid network");
  }
};

export default validations;
