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