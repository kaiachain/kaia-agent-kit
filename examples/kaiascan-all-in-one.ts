import { Packages } from "../src/index";
import 'dotenv/config';

// Configuration
const testAddress = "0xe45CEA5135167451e16175f7B58E9912CF1d8b63";
const config = {
  KAIA_KAIASCAN_API_KEY: process.env.KAIASCAN_API_KEY
};
const network = "kairos"; // Can be "kairos" or "kaia"

// Main function to demonstrate all Kaiascan features
async function demonstrateKaiascanFeatures() {
  try {
    console.log("=== KAIASCAN COMPREHENSIVE EXAMPLE ===\n");
    
    // 1. Get Kaia token info (market data)
    console.log("1. FETCHING KAIA TOKEN INFO...");
    const kaiaInfo = await Packages.kaiascan.Services.getKaiaInfo({}, config);
    console.log(`Current KAIA Price: $${kaiaInfo.usdPrice}`);
    console.log(`24hr Change: ${kaiaInfo.usdPriceChanges}%`);
    console.log(`Market Cap: ${kaiaInfo.marketCap}`);
    
    // 2. Get account overview
    console.log("\n2. FETCHING ACCOUNT OVERVIEW...");
    const accountInfo = await Packages.kaiascan.Services.getAccountOverview(
      { address: testAddress, network },
      config
    );
    console.log(`Account Type: ${accountInfo.accountType}`);
    console.log(`Balance: ${accountInfo.balance} KAIA`);
    console.log(`Total Transactions: ${accountInfo.totalTransactionCount}`);
    
    // 3. Get current balance (simpler way to get just the balance)
    console.log("\n3. FETCHING CURRENT BALANCE...");
    const balanceInfo = await Packages.kaiascan.Services.getCurrentBalance(
      { address: testAddress, network },
      config
    );
    console.log(`Current Balance: ${balanceInfo.balance} KAIA`);
    
    // 4. Get latest block
    console.log("\n4. FETCHING LATEST BLOCK...");
    const latestBlock = await Packages.kaiascan.Services.getLatestBlock(
      { network },
      config
    );
    console.log(`Latest Block: ${latestBlock.blockId}`);
    
    // 5. Get block info for the latest block
    console.log("\n5. FETCHING BLOCK INFO...");
    const blockInfo = await Packages.kaiascan.Services.getBlockInfo(
      { blockNumber: latestBlock.blockId, network },
      config
    );
    console.log(`Block Hash: ${blockInfo.hash}`);
    console.log(`Block Time: ${blockInfo.datetime}`);
    console.log(`Total Block Transactions: ${blockInfo.totalTransactionCount}`);
    
    // 6. Get transactions by block
    console.log("\n6. FETCHING TRANSACTIONS BY BLOCK...");
    const blockTxs = await Packages.kaiascan.Services.getTransactionsByBlockNumber(
      { blockNumber: latestBlock.blockId, network },
      config
    );
    console.log(`Block has ${blockTxs.totalCount} transactions`);
    if (blockTxs.transactions.length > 0) {
      console.log("First transaction:");
      console.log(`- From: ${blockTxs.transactions[0].from}`);
      console.log(`- To: ${blockTxs.transactions[0].to}`);
      console.log(`- Value: ${blockTxs.transactions[0].value}`);
    }
    
    // 7. Get transactions by account
    console.log("\n7. FETCHING ACCOUNT TRANSACTIONS...");
    const accountTxs = await Packages.kaiascan.Services.getTransactionsByAccount(
      { address: testAddress, network },
      config
    );
    console.log(`Account has ${accountTxs.totalCount} transactions`);
    if (accountTxs.transactions.length > 0) {
      console.log("Most recent transaction:");
      console.log(`- From: ${accountTxs.transactions[0].from}`);
      console.log(`- To: ${accountTxs.transactions[0].to}`);
      console.log(`- Value: ${accountTxs.transactions[0].value}`);
    }
    
    // 8. Get token balances
    console.log("\n8. FETCHING TOKEN BALANCES...");
    const ftBalances = await Packages.kaiascan.Services.getFTBalance(
      { address: testAddress, network },
      config
    );
    console.log(`Account has ${ftBalances.totalCount} fungible tokens`);
    
    // 9. Get NFT balances
    console.log("\n9. FETCHING NFT BALANCES...");
    const nftBalances = await Packages.kaiascan.Services.getNFTBalance(
      { address: testAddress, network },
      config
    );
    console.log(`Account has ${nftBalances.totalCount} NFT collections`);
    
    console.log("\n=== KAIASCAN DEMONSTRATION COMPLETE ===");
  } catch (error: any) {
    console.error("Error in Kaiascan demonstration:", error.message);
  }
}

// Run the demonstration
demonstrateKaiascanFeatures(); 