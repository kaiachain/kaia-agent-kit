import { Packages } from "../src/index";
import 'dotenv/config';

// API key configuration
const config = {
  KAIA_KAIASCAN_API_KEY: process.env.KAIASCAN_API_KEY
};

// Get Kaia token information
console.log("Fetching Kaia token information...");
Packages.kaiascan.Services.getKaiaInfo(
  {}, // No parameters needed for this endpoint
  config
).then((result) => {
  console.log("Kaia Token Info JSON Response:");
  console.log(JSON.stringify(result, null, 2));
  
  // Access specific properties
  console.log("\nKaia Token Details:");
  console.log(`USD Price: ${result.usdPrice}`);
  console.log(`BTC Price: ${result.btcPrice}`);
  console.log(`USD Price Changes: ${result.usdPriceChanges}`);
  console.log(`Market Cap: ${result.marketCap}`);
  console.log(`Total Supply: ${result.totalSupply}`);
  console.log(`Volume: ${result.volume}`);
  
  // Calculate market cap in USD (if needed for display)
  const marketCapUSD = Number(result.marketCap).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  console.log(`Market Cap (Formatted): ${marketCapUSD}`);
  
  // Show price change indicator
  const priceChange = parseFloat(result.usdPriceChanges);
  const changeSymbol = priceChange >= 0 ? '↑' : '↓';
  console.log(`24h Change: ${changeSymbol} ${Math.abs(priceChange).toFixed(2)}%`);
}).catch((error) => {
  console.error("Error fetching Kaia token information:", error);
}); 