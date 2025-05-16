export const transferERC20Examples = [
    [
        {
            user: "user",
            content: {
                text: "Transfer 10 USDT to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_ERC20_TOKENS",
                parameters: {
                    contractAddress: "0x55d398326f99059fF775485246999027B3197955", // USDT token address
                    receiver: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                    amount: "10"
                }
            },
        },
        {
            user: "assistant",
            content: {
                text: "I'll help you transfer 10 USDT to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_ERC20_TOKENS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you send 5 DAI tokens to 0x4d69770905f43c07d4085dfd296a03484d05280f?",
                parameters: {
                    contractAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI token address
                    receiver: "0x4d69770905f43c07d4085dfd296a03484d05280f",
                    amount: "5"
                }
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll send 5 DAI tokens to 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "SEND_ERC20_TOKENS",
            },
        },
    ],
];
