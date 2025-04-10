import type { ActionExample } from "@elizaos/core";

export const getNFTBalanceExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the NFT balance of 0x4d69770905f43c07d4085dfd296a03484d05280f?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the NFT balance in 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "GET_NFT_BALANCE",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Which NFTs are in 0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me see which NFTs are in 0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t.",
                action: "GET_NFT_BALANCE",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the balance of 0x5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4 on kaia mainnet?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the NFT balance in 0x5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4 on kaia mainnet for you.",
                action: "GET_NFT_BALANCE",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the non fungible tokens balance of 0x9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8 on kaia mainnet?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the non fungible tokens balance in 0x9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8 on kaia mainnet for you.",
                action: "GET_NFT_BALANCE",
            },
        }
    ],
   
];