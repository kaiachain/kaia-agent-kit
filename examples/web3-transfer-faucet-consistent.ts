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

// Transfer tokens from faucet
Packages.web3.Services.transferFaucet(
  {
    receiver: "0xe45CEA5135167451e16175f7B58E9912CF1d8b63"
  },
  {
    KAIROS_FAUCET_AMOUNT: "1" // Amount in KAIA to transfer from faucet
  },
  walletClient
).then((result) => {
  console.log("Transaction hash:", result.transactionHash);
}).catch((error) => {
  console.error("Error transferring from faucet:", error);
}); 