import {z} from 'zod';

/* Function names are same as the function names in the services.ts file */
export const getPoolByTokenSymbol = {
    name: 'get_pool_by_token_symbol',
    description: 'Get the dragonswap pool by token symbol',
    params: z.object({
        symbol0: z.string(),
        symbol1: z.string()
    }),
    similes: ["get_pool_by_token_symbol"],
    validate: async () => true,
    examples: [],
}

export const getPoolByTokenAddress = {
    name: 'get_pool_by_token_address',
    description: 'Get the dragonswap pool by token address',
    params: z.object({
        token0Address: z.string(),
        token1Address: z.string()
    }),
    similes: ["get_pool_by_token_address"],
    validate: async () => true,
    examples: [],
}

export const getPoolDayData = {
    name: 'get_pool_day_data',
    description: 'Get the dragonswap pool day data',
    params: z.object({
        poolAddress: z.string(),
        count: z.number()
    }),
    similes: ["get_pool_day_data"],
    validate: async () => true,
    examples: [],
}

export const getTokenDayData = {
    name: 'get_token_day_data',
    description: 'Get the dragonswap token day data',
    params: z.object({
        tokenAddress: z.string(),
        count: z.number()
    }),
    similes: ["get_token_day_data"],
    validate: async () => true,
    examples: [],
}