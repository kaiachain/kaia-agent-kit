"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferERC1155Examples = void 0;
exports.transferERC1155Examples = [
    [
        {
            user: "user",
            content: {
                text: "Transfer 5 copies of my ERC1155 token with ID 123 from the OpenSea Shared Collection to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_ERC1155_TOKENS",
                parameters: {
                    contractAddress: "0x495f947276749Ce646f68AC8c248420045cb7b5e", // OpenSea shared collection
                    receiver: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                    tokenId: "123",
                    amount: "5"
                }
            },
        },
        {
            user: "assistant",
            content: {
                text: "I'll help you transfer 5 copies of your ERC1155 token with ID 123 to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_ERC1155_TOKENS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "I'd like to send 10 of my in-game items (token ID 4567) from the Enjin marketplace to 0x4d69770905f43c07d4085dfd296a03484d05280f",
                parameters: {
                    contractAddress: "0xfaaFDc07907ff5120a76b34b731b278c38d6043C", // Example Enjin marketplace address
                    receiver: "0x4d69770905f43c07d4085dfd296a03484d05280f",
                    tokenId: "4567",
                    amount: "10"
                }
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll transfer 10 of your in-game items (token ID 4567) to 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "SEND_ERC1155_TOKENS",
            },
        },
    ],
];
