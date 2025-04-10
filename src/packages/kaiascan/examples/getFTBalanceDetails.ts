import type { ActionExample } from "@elizaos/core";

export const getFTBalanceDetailsExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the fungible token balance of 0x4d69770905f43c07d4085dfd296a03484d05280f?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the fungible token balance in 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "GET_FT_BALANCE_DETAILS",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "How many FT tokens are in 0x4d69770905f43c07d4085dfd296a03484d05280f?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me see how many FT tokens are in 0x4d69770905f43c07d4085dfd296a03484d05280f.",
                action: "GET_FT_BALANCE_DETAILS",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the balance of 0x4d69770905f43c07d4085dfd296a03484d05280f on kaia mainnet?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the fungible token balance in 0x4d69770905f43c07d4085dfd296a03484d05280f on kaia mainnet for you.",
                action: "GET_FT_BALANCE_DETAILS",
            },
        }
    ]
];