"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferExamples = void 0;
exports.transferExamples = [
    [
        {
            user: "user",
            content: {
                text: "Transfer 1 ETH to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_NATIVE_TOKENS",
                parameters: {
                    receiver: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                    amount: "1"
                }
            },
        },
        {
            user: "assistant",
            content: {
                text: "I'll help you transfer 1 ETH to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_NATIVE_TOKENS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you send 0.5 KLAY to 0x4d69770905f43c07d4085dfd296a03484d05280f?",
                parameters: {
                    receiver: "0x4d69770905f43c07d4085dfd296a03484d05280f",
                    amount: "0.5"
                }
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll send 0.5 KLAY to 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "SEND_NATIVE_TOKENS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Transfer 0.1 BNB to my friend at wallet address 0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
                parameters: {
                    receiver: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
                    amount: "0.1"
                }
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll transfer 0.1 BNB to your friend's wallet at 0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b.",
                action: "SEND_NATIVE_TOKENS",
            },
        },
    ],
];
