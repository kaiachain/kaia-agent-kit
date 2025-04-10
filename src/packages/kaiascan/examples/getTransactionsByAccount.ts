import type { ActionExample } from "@elizaos/core";

export const getTransactionsByAccountExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's are the transactions for address 0x742d35Cc6634C0532925a3b844Bc454e4438f44e like right now?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "In which network?",
            },
        },
        {
            user: "{{user1}}",
            content: {
                text: "kairos",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me check the transactions for address 0x742d35Cc6634C0532925a3b844Bc454e4438f44e in kairos for you.",
                action: "GET_TRANSACTIONS_BY_ACCOUNT",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "It's Block Number: 1234 \n Block Time: 10/10/2025 \n Block Hash: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e \n Block Size: 123. Please explore kaia ecosystem.",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the list of transactions for address 0x742d35Cc6634C0532925a3b844Bc454e4438f44e on kaia?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the address 0x742d35Cc6634C0532925a3b844Bc454e4438f44e for transactions in kaia for you.",
                action: "GET_BLOCK",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "It's Block Number: 1234 \n Block Time: 10/10/2025 \n Block Hash: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e \n Block Size: 123. and can explore kaia minidapps.",
            },
        },
    ]
];
