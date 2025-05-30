import { Packages } from "../../src/index";
import 'dotenv/config';

// API key configuration
const config = {
  KAIA_KAIASCAN_API_KEY: process.env.KAIASCAN_API_KEY
};

// First, get the latest block
console.log("Fetching latest block...");
Packages.kaiascan.Services.getLatestBlock(
  {
    network: "kairos"
  },
  config
).then(async (latestBlockResult) => {
  console.log("Latest Block JSON Response:");
  console.log(JSON.stringify(latestBlockResult, null, 2));
  
  const blockId = latestBlockResult.blockId;
  console.log(`\nLatest Block ID: ${blockId}`);
  
  // Then, get details for the latest block
  console.log("\nFetching detailed block info...");
  try {
    const blockInfoResult = await Packages.kaiascan.Services.getBlockInfo(
      {
        blockNumber: blockId,
        network: "kairos"
      },
      config
    );
    
    console.log("Block Info JSON Response:");
    console.log(JSON.stringify(blockInfoResult, null, 2));
    
    console.log(`\nBlock Hash: ${blockInfoResult.hash}`);
    console.log(`Block Time: ${blockInfoResult.datetime}`);
    console.log(`Total Transactions: ${blockInfoResult.totalTransactionCount}`);
    
    // Finally, get transactions in this block
    console.log("\nFetching transactions for this block...");
    const transactionsResult = await Packages.kaiascan.Services.getTransactionsByBlockNumber(
      {
        blockNumber: blockId,
        network: "kairos"
      },
      config
    );
    
    console.log("Block Transactions JSON Response:");
    console.log(JSON.stringify(transactionsResult, null, 2));
    
    // Display transaction details
    if (transactionsResult.transactions.length > 0) {
      console.log(`\nFound ${transactionsResult.totalCount} transactions in block ${blockId}`);
      console.log("\nSample Transactions:");
      
      transactionsResult.transactions.forEach((tx, index) => {
        console.log(`\nTransaction #${index + 1}:`);
        console.log(`From: ${tx.from}`);
        console.log(`To: ${tx.to}`);
        console.log(`Value: ${tx.value}`);
        console.log(`Type: ${tx.type}`);
        console.log(`Hash: ${tx.hash}`);
      });
    } else {
      console.log(`\nNo transactions found in block ${blockId}`);
    }
  } catch (error) {
    console.error("Error in block operations:", error);
  }
}).catch((error) => {
  console.error("Error fetching latest block:", error);
}); 