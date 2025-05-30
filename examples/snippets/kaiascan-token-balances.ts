import { Packages } from "../../src/index";
import 'dotenv/config';

// Sample address to get token balances for
const testAddress = "0xe45CEA5135167451e16175f7B58E9912CF1d8b63";

// Using Kaiascan to get fungible token balances
console.log("Fetching fungible token balances...");
Packages.kaiascan.Services.getFTBalance(
  {
    address: testAddress,
    network: "kairos"
  },
  {
    KAIA_KAIASCAN_API_KEY: process.env.KAIASCAN_API_KEY
  }
).then((result) => {
  console.log("FT Balances JSON Response:");
  console.log(JSON.stringify(result, null, 2));
  
  // Display token information
  if (result.tokens.length > 0) {
    console.log("\nToken Details:");
    result.tokens.forEach((token, index) => {
      console.log(`\nToken #${index + 1}:`);
      console.log(`Name: ${token.name}`);
      console.log(`Symbol: ${token.symbol}`);
      console.log(`Balance: ${token.balance}`);
      console.log(`Contract: ${token.contractAddress}`);
    });
  } else {
    console.log("No fungible tokens found");
  }
}).catch((error) => {
  console.error("Error fetching FT balances:", error);
});

// Using Kaiascan to get non-fungible token balances
console.log("\nFetching NFT balances...");
Packages.kaiascan.Services.getNFTBalance(
  {
    address: testAddress,
    network: "kairos"
  },
  {
    KAIA_KAIASCAN_API_KEY: process.env.KAIASCAN_API_KEY
  }
).then((result) => {
  console.log("NFT Balances JSON Response:");
  console.log(JSON.stringify(result, null, 2));
  
  // Display NFT collection information
  if (result.collections.length > 0) {
    console.log("\nNFT Collections:");
    result.collections.forEach((collection, index) => {
      console.log(`\nCollection #${index + 1}:`);
      console.log(`Contract Address: ${collection.contractAddress}`);
      console.log(`Token Count: ${collection.tokenCount}`);
    });
  } else {
    console.log("No NFT collections found");
  }
}).catch((error) => {
  console.error("Error fetching NFT balances:", error);
}); 