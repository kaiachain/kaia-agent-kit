import { Packages } from "../src/index";

import { http, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { kairos, kaia } from "viem/chains";

// Create a wallet client with a private key (this is a test key, never use in production)
const account = privateKeyToAccount(
  "0x-your-private-key"
);

const walletClient = createWalletClient({
  account: account,
  transport: http("https://public-en-kairos.node.kaia.io"),
  chain: kairos,
});

// Transfer native tokens (KAIA/KAIROS)
Packages.web3.Services.transferNativeToken(
  {
    sender: account.address,
    receiver: "0xe45CEA5135167451e16175f7B58E9912CF1d8b63",
    amount: "0.01" // Amount in native token units (KAIA/KAIROS)
  },
  {}, // Config object (not used in this example)
  walletClient
).then((result) => {
  console.log("Transaction hash:", result.transactionHash);
}).catch((error) => {
  console.error("Error transferring native tokens:", error);
}); 