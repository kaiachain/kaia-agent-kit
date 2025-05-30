# Kaia Agent Kit

The Kaia Agent Kit is a comprehensive toolkit designed to help developers build, deploy, and manage AI agents efficiently. It provides a set of tools and libraries that streamline the development process, making it easier to integrate AI capabilities into your applications.

## Features

- Easy integration with existing projects
- Pre-built AI models and templates
- Comprehensive documentation and examples
- Scalable and efficient deployment options

# Plugins Available

| Plugin   | Description                                                        | Features Available                                                                                                                                                                                           |
| -------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| dgswap   | Contains DGswap tokens and pools information                       | `get_pool_by_token_symbol`, `get_pool_by_token_address`, `get_pool_day_data`, `get_token_day_data`                                                                                                           |
| web3     | Contains on-chain transfer functions for tokens and native assets  | `transfer_erc20`, `transfer_erc721`, `transfer_erc1155`, `transfer_native_token`, `transfer_faucet`                                                                                                          |
| kaiascan | Provides Kaia price, balances, transactions, and block information | `get_account_overview`, `get_current_balance`, `get_ft_balance`, `get_nft_balance`, `get_kaia_info`, `get_block_info`, `get_latest_block`, `get_transactions_by_account`, `get_transactions_by_block_number` |

## Usage Guide

### Package Usage as SDK in projects

The web3 plugin provides a faucet functionality to get test KAIA tokens on the Kairos testnet. Here's how to use it:

```typescript
import { Packages } from "@kaiachain/kaia-agent-kit";
import { JsonRpcProvider, Wallet } from "@kaiachain/ethers-ext";
import { kairos } from "viem/chains";

// Initialize wallet client
const provider = new JsonRpcProvider(kairos.rpcUrls.default.http[0]);
const wallet = new Wallet("0x-your-private-key", provider);

// Request faucet tokens
const result = await Packages.web3.Services.transferFaucet(
  {
    receiver: "0x-receiver-address", // The address to receive test tokens
  },
  {
    KAIROS_FAUCET_AMOUNT: "1", // Amount of KAIA tokens to receive (default: 1)
  },
  wallet
);

console.log(result.transactionHash); // Transaction hash of the faucet transfer
```

The faucet function will:
- Transfer test KAIA tokens to the specified receiver address
- Return the transaction hash of the transfer
- Default amount is 1 KAIA token, but can be configured via the `KAIROS_FAUCET_AMOUNT` parameter

### Package Usage in AI Frameworks

[Link Here]()

## Setup Guide

Follow these steps to set up the Kaia Agent Kit in your project:

### Prerequisites

- Node.js (version 18.18.2 or higher)
- npm (version 9.9.3 or higher)
- Git

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/kaiachain/kaia-agent-kit.git
    cd kaia-agent-kit
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

3. **Build:**

    ```bash
    pnpm build
    ```

### Contributing

We welcome contributions! Please read our [contributing guide](CONTRIBUTING.md) to get started.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

For any questions or support, please open an issue on our [GitHub repository](https://github.com/kaiachain/kaia-agent-kit/issues).
