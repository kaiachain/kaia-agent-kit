export const getTokenDayDataExamples = [
    [
        {
            user: "user",
            content: {
                text: "Get the token day data for 0x742d35Cc6634C0532925a3b844Bc454e4438f44e for last 7 records"
            },
        },
        {
            user: "assistant",
            content: {
                text: "I'll fetch the token day data for 0x742d35Cc6634C0532925a3b844Bc454e4438f44e for last 7 records.",
                action: "get_token_day_data",
                parameters: {
                    tokenAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                    count: 7
                }
            },
        },
    ]
];
