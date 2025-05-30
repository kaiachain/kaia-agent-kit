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

// Example NFT contract address on Kairos network
const nftAddress = "0xE28078bb29E8369d032e8B0572e64C960db8Dc0c"; // Replace with actual NFT contract address
const tokenId = "20"; // Replace with actual token ID

// Transfer ERC721 NFT token
Packages.web3.Services.transferErc721(
  {
    contractAddress: nftAddress,
    sender: account.address,
    receiver: "0xe45CEA5135167451e16175f7B58E9912CF1d8b63",
    tokenId: tokenId
  },
  {}, // Config object (not used in this example)
  walletClient
).then((result) => {
  console.log("Transaction hash:", result.transactionHash);
}).catch((error) => {
  console.error("Error transferring NFT:", error);
}); 