import type { ActionExample } from "@elizaos/core";

export const transferExamples: ActionExample[][] = [
    [
        {
            user: "user",
            content: {
                text: "Transfer 1 ETH to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_TOKENS",
            },
        },
        {
            user: "assistant",
            content: {
                text: "I'll help you transfer 1 ETH to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_TOKENS",
            },
        },
    ],
];
