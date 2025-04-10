import type { ActionExample } from "@elizaos/core";

export const getBlockExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's is the block info of 12345 like right now?",
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
                text: "Let me check the latest block info in kairos for you.",
                action: "GET_BLOCK",
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
                text: "What's the block info for 12345 on kaia?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the block info for 12345 in kaia for you.",
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
