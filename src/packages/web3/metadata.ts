import {z} from 'zod';

let metadata: any = {};

metadata.transferErc20 = {
    name: 'transfer_erc20',
    description: 'transfer erc20 token',
    params: z.object({
        sender: z.string(),
        receiver: z.string(),
        amount: z.union([z.string(), z.bigint(), z.number()]),
        contractAddress: z.string(),
        network: z.enum(['kaia', 'kairos'])
    })
}

metadata.transferErc721 = {
    name: 'transfer_erc721',
    description: 'transfer erc721 token',
    params: z.object({
        sender: z.string(),
        receiver: z.string(),
        tokenId: z.string(),
        contractAddress: z.string(),
        network: z.enum(['kaia', 'kairos'])
    })
};

metadata.transferErc1155 = {
    name: 'transfer_erc1155',
    description: 'transfer erc1155 token',
    params: z.object({
        sender: z.string(),
        receiver: z.string(),
        amount: z.union([z.string(), z.bigint(), z.number()]),
        tokenId: z.string(),
        contractAddress: z.string(),
        network: z.enum(['kaia', 'kairos'])
    })
};

metadata.transferNativeToken = {
    name: 'transfer_native_token',
    description: 'transfer native token',
    params: z.object({
        sender: z.string(),
        receiver: z.string(),
        amount: z.union([z.string(), z.bigint(), z.number()]),
        network: z.enum(['kaia', 'kairos'])
    })
};

export default metadata;