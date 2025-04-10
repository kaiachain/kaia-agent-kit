import type { ActionExample } from "@elizaos/core";

export const faucetExamples: ActionExample[][] = [
    [
        {
            user: "user",
            content: {
                text: "Transfer some faucet kaia testnet tokens to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "FAUCET",
            },
        },
        {
            user: "assistant",
            content: {
                text: "I'll help you send some Kaia testnet tokens to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "FAUCET",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can i get some test tokens to 0x4d69770905f43c07d4085dfd296a03484d05280f?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "let me transfer test tokens to 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "FAUCET",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can i get faucets to 0x4d69770905f43c07d4085dfd296a03484d05280f?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "let me transfer some test tokens to 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "FAUCET",
            },
        },
    ],
];
