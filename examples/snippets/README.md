# Kaia Agent Kit Examples

This folder contains examples demonstrating how to use different features of the Kaia Agent Kit.

## Web3 Examples

The following examples show how to use the Web3 package for different types of token transfers on Kaia/Kairos networks:

### Native Token Transfer
- `web3-transfer-native-token.ts`: Demonstrates how to transfer native tokens (KAIA/KAIROS)
- `web3-transfer-faucet-consistent.ts`: Shows how to use the faucet to transfer test tokens

### Token Standards
- `web3-transfer-erc20.ts`: Shows how to transfer ERC20 tokens
- `web3-transfer-erc721.ts`: Shows how to transfer ERC721 NFT tokens
- `web3-transfer-erc1155.ts`: Shows how to transfer ERC1155 tokens

## Running the Examples

To run any example, use the following command:

```
npx tsx examples/[example-filename].ts
```

### Notes

- The ERC20, ERC721, and ERC1155 examples require valid contract addresses to work properly
- The private key used in the examples is for testing only and should never be used in production
- For the ERC20 example, you may need to replace the token address with a valid one that has tokens available 