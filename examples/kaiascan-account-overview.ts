import { Packages } from "../src/index";
import 'dotenv/config';

// Sample address to get account overview for
const testAddress = "0xe45CEA5135167451e16175f7B58E9912CF1d8b63";

// Using Kaiascan to get account overview
Packages.kaiascan.Services.getAccountOverview(
  {
    address: testAddress,
    network: "kairos" // Can be "kairos" or "kaia"
  },
  {
    KAIA_KAIASCAN_API_KEY: process.env.KAIASCAN_API_KEY
  }
).then((result) => {
  console.log("Account Overview JSON Response:");
  console.log(JSON.stringify(result, null, 2));
  
  // Access specific properties from the JSON response
  console.log(`\nAccount Address: ${result.address}`);
  console.log(`Account Type: ${result.accountType}`);
  console.log(`Balance: ${result.balance}`);
  console.log(`Total Transactions: ${result.totalTransactionCount}`);
}).catch((error) => {
  console.error("Error fetching account overview:", error);
}); 