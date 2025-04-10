import type { ActionExample } from "@elizaos/core";

export const getLatestBlockExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's is the latest block number like right now?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "In which network?",
                action: "NONE",
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
                text: "Let me check the latest block number in kairos for you.",
                action: "GET_LATEST_BLOCK",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "It's currently 1000000 block height. You can check the latest block number in kaia as well.",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the latest block number of kaia?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the current block height in kaia for you.",
                action: "GET_LATEST_BLOCK",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "It's currently 10000000 block height and can explore kaia minidapps.",
            },
        },
    ]
];
