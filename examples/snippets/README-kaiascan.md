# Kaiascan Examples

This directory contains example scripts demonstrating how to use the Kaiascan service in the Kaia Agent Kit.

## Available Examples

- **kaiascan-account-overview.ts**: Shows how to get an overview of an account's details
- **kaiascan-token-balances.ts**: Demonstrates retrieving FT and NFT balances
- **kaiascan-block-transactions.ts**: Shows how to get block information and transactions within a block 
- **kaiascan-account-transactions.ts**: Demonstrates how to get transactions for a specific account
- **kaiascan-kaia-info.ts**: Shows how to get Kaia token information
- **kaiascan-current-balance.ts**: Shows how to get the current balance of an account
- **kaiascan-all-in-one.ts**: A comprehensive example that demonstrates all Kaiascan methods

## Prerequisites

Before running these examples, make sure you have set up your environment variables in the `.env` file:

1. `KAIASCAN_API_KEY`: Your Kaiascan API key
2. `WALLET_PRIVATE_KEY`: Your wallet's private key (for web3 examples)
3. `RPC_PROVIDER_URL`: RPC provider URL (defaults to Kairos public endpoint if not provided)

Example `.env` file:
```
KAIASCAN_API_KEY=your-kaiascan-api-key
WALLET_PRIVATE_KEY=your-private-key-with-or-without-0x-prefix
RPC_PROVIDER_URL=https://public-en-kairos.node.kaia.io
```

## Running the Examples

To run any of the example scripts:

```bash
# Install dependencies
npm install

# Run an example
npx ts-node examples/kaiascan-account-overview.ts
```

## JSON Responses

All Kaiascan methods now return JSON objects instead of formatted strings, making it easier to:

1. Process data programmatically
2. Format output however you prefer
3. Extract specific pieces of information

For example, when fetching an account overview:

```typescript
const result = await Packages.kaiascan.Services.getAccountOverview(
  { address: "0x123...", network: "kairos" },
  { KAIA_KAIASCAN_API_KEY: process.env.KAIASCAN_API_KEY }
);

// Access properties directly from the result object
console.log(`Balance: ${result.balance}`);
console.log(`Account Type: ${result.accountType}`);
```

## Additional Resources

For more information on the Kaia blockchain and services:
- [Kaia Official Website](https://kaia.io)
- [Kaia Documentation](https://docs.kaia.io) 