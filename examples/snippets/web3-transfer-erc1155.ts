import { Packages } from "../../src/index";
import 'dotenv/config';

import { http, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { kairos, kaia } from "viem/chains";

// Create a wallet client with a private key
const privateKey = process.env.WALLET_PRIVATE_KEY || "";
// Ensure the key has the correct format (0x prefix) and proper type
const formattedKey = privateKey.startsWith('0x') ? privateKey as `0x${string}` : `0x${privateKey}` as `0x${string}`;
const account = privateKeyToAccount(formattedKey);

const walletClient = createWalletClient({
  account: account,
  transport: http(process.env.RPC_PROVIDER_URL || "https://public-en-kairos.node.kaia.io"),
  chain: kairos,
});

// Example ERC1155 contract address on Kairos network
const erc1155Address = "0x34d7799565b33dec34f1e4d371e8e45182aef62a"; // Replace with actual ERC1155 contract address
const tokenId = "10"; // Replace with actual token ID

// Transfer ERC1155 token
Packages.web3.Services.transferErc1155(
  {
    contractAddress: erc1155Address,
    sender: account.address,
    receiver: "0xe45CEA5135167451e16175f7B58E9912CF1d8b63",
    tokenId: tokenId,
    amount: "1" // Number of tokens to transfer
  },
  {}, // Config object (not used in this example)
  walletClient
).then((result) => {
  console.log("Transaction hash:", result.transactionHash);
}).catch((error) => {
  console.error("Error transferring ERC1155 tokens:", error);
}); 