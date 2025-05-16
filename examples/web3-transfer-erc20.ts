import { Packages } from "../src/index";

import { http, createWalletClient, parseEther } from "viem";
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

// Example ERC20 token address on Kairos network
// Note: This is a placeholder - you need to replace with a valid ERC20 contract address
const tokenAddress = "0xb10534569da14eb4b55a01b4ee4fe5ef4a62d420"; // Replace with actual token address

// Mock the walletClient.read method for testing
(walletClient as any).read = async function(params) {
  console.log("Mock read called with:", params);
  return { value: 18 }; // Return mock decimals
};

// Transfer ERC20 tokens
Packages.web3.Services.transferErc20(
  {
    contractAddress: tokenAddress,
    receiver: "0xe45CEA5135167451e16175f7B58E9912CF1d8b63",
    sender: account.address,
    amount: "1" // Amount in token units (will be formatted based on decimals)
  },
  {}, // Config object (not used in this example)
  walletClient
).then((result) => {
  console.log("Transaction hash:", result.transactionHash);
  console.log("Transaction URL:", result.url);
}).catch((error) => {
  console.error("Error transferring tokens:", error);
}); 