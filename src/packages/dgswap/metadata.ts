import { z } from 'zod';

/* Function names are same as the function names in the services.ts file */
// for params `where` schema, please refer to https://thegraph.com/explorer/subgraphs/DFu3UKnkVWq4xgYq5NFerMu6puA9SkqdMyjjWmauwqqM?view=Query&chain=arbitrum-one
// pools
export const getPools = {
    name: 'get_pools',
    description: 'Get the dragonswap pool by token symbol',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_pools"],
    validate: async () => true,
    examples: [
        {
            count: 10,
            skip: 0,
            where: {
                or: [
                    { token0_: { symbol: 'USDT' }, token1_: { symbol: 'xGRND' } },
                    { token0_: { symbol: 'xGRND' }, token1_: { symbol: 'USDT' } }
                ]
            }
        },
        {
            count: 10,
            skip: 0,
            where: {
                or: [
                    { token0_: { id: '0x9bcb2efc545f89986cf70d3adc39079a1b730d63' }, token1_: { id: '0x5c13e303a62fc5dedf5b52d66873f2e59fedadc2' } },
                    { token0_: { id: '0x5c13e303a62fc5dedf5b52d66873f2e59fedadc2' }, token1_: { id: '0x9bcb2efc545f89986cf70d3adc39079a1b730d63' } }
                ]
            }
        }
    ],
}

export const getPoolDayData = {
    name: 'get_pool_day_data',
    description: 'Get the dragonswap pool day data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_pool_day_data"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
}

export const getPoolHourDatas = {
    name: 'get_pool_hour_datas',
    description: 'Get the dragonswap pool hour data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_pool_hour_datas"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
}

// tokens
export const getTokens = {
    name: 'get_tokens',
    description: 'Get the dragonswap token data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_tokens"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
}

export const getTokenDayData = {
    name: 'get_token_day_data',
    description: 'Get the dragonswap token day data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_token_day_data"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0,
            where: { id: '0x754288077d0ff82af7a5317c7cb8c444d421d103' }
        }
    ],
}

export const getTokenHourDatas = {
    name: 'get_token_hour_datas',
    description: 'Get the dragonswap token hour data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_token_hour_datas"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
}

// ticks
export const getTicks = {
    name: 'get_ticks',
    description: 'Get the dragonswap tick data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_ticks"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
}

export const getTickDayDatas = {
    name: 'get_tick_day_datas',
    description: 'Get the dragonswap tick day data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_tick_day_datas"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
}

export const getTickHourDatas = {
    name: 'get_tick_hour_datas',
    description: 'Get the dragonswap tick hour data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_tick_hour_datas"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
}

// Factory
export const getFactory = {
    name: 'get_factory',
    description: 'Get the dragonswap factory data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_factory"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0,
            where: { owner: '0x0000000000000000000000000000000000000000' }
        }
    ],
}

// Bundles
export const getBundles = {
    name: 'get_bundles',
    description: 'Get the dragonswap bundle data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_bundles"],
    validate: async () => true,
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
}

// Collects
export const getCollects = {
    name: 'get_collects',
    description: 'Get the dragonswap collect data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_collects"],
    validate: async () => true,
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
}

// Flashes
export const getFlashes = {
    name: 'get_flashes',
    description: 'Get the dragonswap flash data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_flashes"],
    validate: async () => true,
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
}

// PancakeDayDatas
export const getPancakeDayDatas = {
    name: 'get_pancake_day_datas',
    description: 'Get the dragonswap pancake day data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_pancake_day_datas"],
    validate: async () => true,
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
}

// PositionSnapshots
export const getPositionSnapshots = {
    name: 'get_position_snapshots',
    description: 'Get the dragonswap position snapshot data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_position_snapshots"],
    validate: async () => true,
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
}

// Positions
export const getPositions = {
    name: 'get_positions',
    description: 'Get the dragonswap position data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_positions"],
    validate: async () => true,
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
}

// Transactions
export const getMintTransactions = {
    name: 'get_mint_transactions',
    description: 'Get the dragonswap mint transaction data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_mint_transactions"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0,
            where: { pool: '0x27ce70da1be2b4a075786cf54dd143a35e7ac949' }
        }
    ],
}

export const getSwapTransactions = {
    name: 'get_swap_transactions',
    description: 'Get the dragonswap swap transaction data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_swap_transactions"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0,
            where: { pool: '0x27ce70da1be2b4a075786cf54dd143a35e7ac949' }
        }
    ],
}

export const getTransactions = {
    name: 'get_transactions',
    description: 'Get the dragonswap transaction data',
    params: z.object({
        count: z.number(),
        skip: z.number(),
        where: z.object({}).optional()
    }),
    similes: ["get_transactions"],
    validate: async () => true,
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
}