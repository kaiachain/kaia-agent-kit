import type { ActionExample } from "@elizaos/core";

export const getTransactionsByBlockExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's are the transactions in block 12345 like right now?",
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
                text: "Let me check the transactions in block 12345 in kairos for you.",
                action: "GET_BLOCK",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "It's Block Number: 1234 \n Block Time: 10/10/2025 \n Block Hash: 0x23kdhjsfsdkhfkjhkjhdf \n Block Size: 123. Please explore kaia ecosystem.",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the list of transactions in block for 12345 on kaia?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the block 12345 for transactions in kaia for you.",
                action: "GET_BLOCK",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "It's Block Number: 1234 \n Block Time: 10/10/2025 \n Block Hash: 0x23kdhjsfsdkhfkjhkjhdf \n Block Size: 123. and can explore kaia minidapps.",
            },
        },
    ]
];
