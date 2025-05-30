export const transferERC721Examples = [
    [
        {
            user: "user",
            content: {
                text: "Transfer my NFT with token ID 42 from the CryptoPunks collection to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_ERC721_TOKENS",
                parameters: {
                    contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB", // CryptoPunks NFT contract
                    receiver: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                    tokenId: "42"
                }
            },
        },
        {
            user: "assistant",
            content: {
                text: "I'll help you transfer your CryptoPunks NFT with token ID 42 to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_ERC721_TOKENS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "I want to send my BAYC NFT #1234 to 0x4d69770905f43c07d4085dfd296a03484d05280f",
                parameters: {
                    contractAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D", // BAYC contract address
                    receiver: "0x4d69770905f43c07d4085dfd296a03484d05280f",
                    tokenId: "1234"
                }
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll transfer your Bored Ape Yacht Club NFT #1234 to 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "SEND_ERC721_TOKENS",
            },
        },
    ],
];
