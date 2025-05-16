export const transferFaucetExamples = [
    [
        {
            user: "user",
            content: {
                text: "Request some test tokens from the faucet to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "REQUEST_FAUCET",
                parameters: {
                    receiver: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
                }
            },
        },
        {
            user: "assistant",
            content: {
                text: "I'll help you request test tokens from the faucet to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "REQUEST_FAUCET",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can I get test tokens from the Kaia faucet to 0x4d69770905f43c07d4085dfd296a03484d05280f?",
                parameters: {
                    receiver: "0x4d69770905f43c07d4085dfd296a03484d05280f"
                }
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll request test tokens from the Kaia faucet to be sent to 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "REQUEST_FAUCET",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "I need some testnet tokens for development. My wallet is 0xa1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4",
                parameters: {
                    receiver: "0xa1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4"
                }
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll request testnet tokens for your development work to be sent to 0xa1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4.",
                action: "REQUEST_FAUCET",
            },
        },
    ],
]; 