import { Packages } from "../../src/index";
import 'dotenv/config';

// Sample address to get balance for
const testAddress = "0xe45CEA5135167451e16175f7B58E9912CF1d8b63";

// API key configuration
const config = {
  KAIA_KAIASCAN_API_KEY: process.env.KAIASCAN_API_KEY
};

// Get current balance for an account
console.log(`Fetching current balance for address ${testAddress}...`);
Packages.kaiascan.Services.getCurrentBalance(
  {
    address: testAddress,
    network: "kairos" // Can be "kairos" or "kaia"
  },
  config
).then((result) => {
  console.log("Current Balance JSON Response:");
  console.log(JSON.stringify(result, null, 2));
  
  // Access specific properties
  console.log(`\nAccount: ${result.address}`);
  console.log(`Network: ${result.network}`);
  console.log(`Balance: ${result.balance} KAIA`);
  
  // Format the balance for display (optional)
  const balanceInEther = parseFloat(result.balance);
  console.log(`Formatted Balance: ${balanceInEther.toFixed(4)} KAIA`);
  
  // If you need to convert to USD (assuming you have price data)
  // This is just an example - you would need to get the actual price first
  const assumedPrice = 0.5; // Example price in USD
  const usdValue = balanceInEther * assumedPrice;
  console.log(`Estimated USD Value: $${usdValue.toFixed(2)}`);
}).catch((error) => {
  console.error("Error fetching current balance:", error);
}); 