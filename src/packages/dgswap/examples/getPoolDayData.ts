export const getPoolDayDataExamples = [
    [
        {
            user: "user",
            content: {
                text: "Get the pool day data for USDT-KAIA pool for last 7 records"
            },
        },
        {
            user: "assistant",
            content: {
                text: "I'll fetch the pool day data for the USDT-KAIA pool for last 7 records.",
                action: "get_pool_day_data",
                parameters: {
                    poolAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                    count: 7
                }
            },
        },
    ]
];
