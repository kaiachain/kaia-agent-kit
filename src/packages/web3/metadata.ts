import { z } from 'zod';
import { faucetExamples } from './examples/faucet';
import { transferExamples } from './examples/transfer';

/* Function names are same as the function names in the services.ts file */
export const transferFaucet = {
    name: 'transfer_test_kaia_coins',
    description: 'transfer test kaia coins for a given receiver address',
    params: z.object({
        receiver: z.string()
    }),
    similes: ["transfer_test_kaia_coins"],
    validate: async () => true,
    examples: faucetExamples
}

export const transferErc20 = {
    name: 'transfer_erc20',
    description: 'transfer erc20 token for a given receiver address and contract address',
    params: z.object({
        receiver: z.string(),
        amount: z.number(),
        contractAddress: z.string(),
        network: z.enum(['kaia', 'kairos'])
    }),
    similes: ["transfer_erc20"],
    validate: async () => true,
    examples: [],
}

export const transferErc721 = {
    name: 'transfer_erc721',
    description: 'transfer erc721 token',
    params: z.object({
        receiver: z.string(),
        tokenId: z.string(),
        contractAddress: z.string(),
        network: z.enum(['kaia', 'kairos'])
    }),
    similes: ["transfer_erc721"],
    validate: async () => true,
    examples: [],
};

export const transferErc1155 = {
    name: 'transfer_erc1155',
    description: 'transfer erc1155 token',
    params: z.object({
        receiver: z.string(),
        amount: z.number(),
        tokenId: z.string(),
        contractAddress: z.string(),
        network: z.enum(['kaia', 'kairos'])
    }),
    similes: ["transfer_erc1155"],
    validate: async () => true,
    examples: [],
};

export const transferNativeToken = {
    name: 'transfer_native_token',
    description: 'transfer native token for a given receiver address, amount and network',
    params: z.object({
        receiver: z.string(),
        amount: z.number(),
        network: z.enum(['kaia', 'kairos'])
    }),
    similes: ["transfer_native_token"],
    validate: async () => true,
    examples: [transferExamples],
};