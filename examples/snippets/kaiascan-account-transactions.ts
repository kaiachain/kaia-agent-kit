import { Packages } from "../../src/index";
import 'dotenv/config';

// Sample address to get transactions for
const testAddress = "0xe45CEA5135167451e16175f7B58E9912CF1d8b63";

// API key configuration
const config = {
  KAIA_KAIASCAN_API_KEY: process.env.KAIASCAN_API_KEY
};

// Get transactions for an account
console.log(`Fetching transactions for address ${testAddress}...`);
Packages.kaiascan.Services.getTransactionsByAccount(
  {
    address: testAddress,
    network: "kairos"
  },
  config
).then((result) => {
  console.log("Account Transactions JSON Response:");
  console.log(JSON.stringify(result, null, 2));
  
  // Access specific properties
  console.log(`\nAccount: ${result.address}`);
  console.log(`Network: ${result.network}`);
  console.log(`Total Transactions: ${result.totalCount}`);
  
  // Display transaction details
  if (result.transactions.length > 0) {
    console.log("\nRecent Transactions:");
    
    result.transactions.forEach((tx, index) => {
      console.log(`\nTransaction #${index + 1}:`);
      console.log(`From: ${tx.from}`);
      console.log(`To: ${tx.to}`);
      console.log(`Value: ${tx.value}`);
      console.log(`Type: ${tx.type}`);
      console.log(`Hash: ${tx.hash}`);
    });
    
    if (result.totalCount > result.transactions.length) {
      console.log(`\n...and ${result.totalCount - result.transactions.length} more transactions`);
    }
  } else {
    console.log("\nNo transactions found for this address");
  }
}).catch((error) => {
  console.error("Error fetching account transactions:", error);
}); 