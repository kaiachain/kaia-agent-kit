import {z} from 'zod';

import {  getAccountOverviewExamples } from "./examples/getAccountOverview";
import {  getBlockExamples } from "./examples/getBlock";
import {  getCurrentBalanceExamples } from "./examples/getCurrentBalance";
import {  getFTBalanceDetailsExamples } from "./examples/getFTBalanceDetails";
import {  getKaiaInfoExamples } from "./examples/getKaiaInfo";
import {  getLatestBlockExamples } from "./examples/getLatestBlock";
import {  getNFTBalanceExamples } from "./examples/getNFTBalance";
import {  getTransactionsByAccountExamples } from "./examples/getTransactionsByAccount";
import {  getTransactionsByBlockExamples } from "./examples/getTransactionsByBlock";

/* Function names are same as the function names in the services.ts file */

export const getAccountOverview = {
    name: 'get_account_overview',
    description: 'Get the Account Overview for a given address and network (kaia or kairos)',
    params: z.object({
        address: z.string(),
        network: z.string()
    }),
    similes: ["get_account_overview"],
    validate: async () => true,
    examples: getAccountOverviewExamples
}

export const getCurrentBalance = {
    name: 'get_current_balance',
    description: 'Get the current balance for a given address and network (kaia or kairos)',
    params: z.object({
        address: z.string(),
        network: z.string()
    }),
    similes: ["get_current_balance"],
    validate: async () => true,
    examples: getCurrentBalanceExamples,
}

export const getFTBalance = {
    name: 'get_ft_balance',
    description: 'Get the Fungible token or ft or erc20 or kip 7 balances for a given address and network',
    params: z.object({
        address: z.string(),
        network: z.string()
    }),
    similes: ["get_ft_balance"],
    validate: async () => true,
    examples: getFTBalanceDetailsExamples,
}

export const getNFTBalance = {
    name: 'get_nft_balance_details',
    description: 'Get the Non-Fungible token or nft or erc721 or kip17 balances for a given address and network (kaia or kairos)',
    params: z.object({
        address: z.string(),
        network: z.string()
    }),
    similes: ["get_nft_balance_details"],
    validate: async () => true,
    examples: getNFTBalanceExamples,
}

export const getKaiaInfo = {
    name: 'get_kaia_info',
    description: 'Get the kaia current info or kaia overview about Kaia Token or gets current kaia price',
    params: z.object({}),
    similes: ["get_kaia_info"],
    validate: async () => true,
    examples: getKaiaInfoExamples,
}

export const getBlockInfo = {
    name: 'get_block_info',
    description: 'Get the block info for a given block number and network (kaia or kairos)',
    params: z.object({
        blockNumber: z.number(),
        network: z.string()
    }),
    similes: ["get_block_info"],
    validate: async () => true,
    examples: getBlockExamples,
}

export const getLatestBlock = {
    name: 'get_latest_block',
    description: 'Get the latest block number or block height for a given network (kaia or kairos)',
    params: z.object({
        network: z.string()
    }),
    similes: ["get_latest_block"],
    validate: async () => true,
    examples: getLatestBlockExamples,
}

export const getTransactionsByAccount = {
    name: 'get_transactions_by_account',
    description: 'Get the transactions for given address and network (kaia or kairos)',
    params: z.object({
        address: z.string(),
        network: z.string()
    }),
    similes: ["get_transactions_by_account"],
    validate: async () => true,
    examples: getTransactionsByAccountExamples,
}

export const getTransactionsByBlockNumber = {
    name: 'get_transactions_by_block_number',
    description: 'Get the transactions for given block number and network (kaia or kairos)',
    params: z.object({
        blockNumber: z.number(),
        network: z.string()
    }),
    similes: ["get_transactions_by_block_number"],
    validate: async () => true,
    examples: getTransactionsByBlockExamples,
}