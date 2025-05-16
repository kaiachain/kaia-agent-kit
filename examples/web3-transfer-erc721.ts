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