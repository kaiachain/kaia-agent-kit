import {z} from 'zod';



export const faucetTransfer = {
    name: 'get_faucet_tokens',
    description: 'Get some test tokens for a given address',
    params: z.object({
        address: z.string()
    })
}

export const getAccountOverview = {
    name: 'get_account_overview',
    description: 'Get the Account Overview for a given address and network (kaia or kairos)',
    params: z.object({
        address: z.string(),
        network: z.string()
    })
}

export const getCurrentBalance = {
    name: 'get_current_balance',
    description: 'Get the current balance for a given address and network (kaia or kairos)',
    params: z.object({
        address: z.string(),
        network: z.string()
    })
}

export const getFTBalance = {
    name: 'get_ft_balance',
    description: 'Get the Fungible token or ft or erc20 or kip 7 balances for a given address and network',
    params: z.object({
        address: z.string(),
        network: z.string()
    })
}

export const getNFTBalance = {
    name: 'get_nft_balance_details',
    description: 'Get the Non-Fungible token or nft or erc721 or kip17 balances for a given address and network (kaia or kairos)',
    params: z.object({
        address: z.string(),
        network: z.string()
    })
}

export const nativeTransfer = {
    name: 'native_transfer',
    description: 'Transfer native token KAIA to a given address, amount in KAIA and network (kaia or kairos)',
    params: z.object({
        address: z.string(),
        amount: z.number(),
        network: z.string()
    })
}

export const getKaiaInfo = {
    name: 'get_kaia_info',
    description: 'Get the kaia current info or kaia overview about Kaia Token or gets current kaia price',
    params: z.object({})
}

export const getBlockInfo = {
    name: 'get_block_info',
    description: 'Get the block info for a given block number and network (kaia or kairos)',
    params: z.object({
        blockNumber: z.number(),
        network: z.string()
    })
}

export const getLatestBlock = {
    name: 'get_latest_block',
    description: 'Get the latest block number or block height for a given network (kaia or kairos)',
    params: z.object({
        network: z.string()
    })
}

export const getTransactionsByAccount = {
    name: 'get_transactions_by_account',
    description: 'Get the transactions for given address and network (kaia or kairos)',
    params: z.object({
        address: z.string(),
        network: z.string()
    })
}

export const getTransactionsByBlockNumber = {
    name: 'get_transactions_by_block_number',
    description: 'Get the transactions for given block number and network (kaia or kairos)',
    params: z.object({
        blockNumber: z.number(),
        network: z.string()
    })
}