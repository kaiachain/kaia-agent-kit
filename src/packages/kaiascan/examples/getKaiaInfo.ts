import type { ActionExample } from "@elizaos/core";

export const getKaiaInfoExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you give me overview of kaia?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Sure, let me fetch the Kaia details for you.",
                action: "GET_KAIA_INFO",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you tell me the Kaia price details?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Sure, let me fetch the Kaia price details for you.",
                action: "GET_KAIA_INFO",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the current market cap of Kaia?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me check the current market cap of Kaia for you.",
                action: "GET_KAIA_INFO",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "How much is the total supply of Kaia?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the total supply of Kaia for you.",
                action: "GET_KAIA_INFO",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you provide the volume of Kaia?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me fetch the volume of Kaia for you.",
                action: "GET_KAIA_INFO",
            },
        },
    ],
];
