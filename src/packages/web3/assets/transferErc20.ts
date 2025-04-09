import { AbiFactory, TokenTransferPayload } from "../utils/token.js";
import { RPC_DEFAULT } from "../../../utils/constants";

import { isKlaytnAccountKeyType, JsonRpcProvider, TxType, Wallet } from "@kaiachain/ethers-ext";





export const transferErc20 = async (
    parameters: Omit<TokenTransferPayload, 'type' | 'tokenId'> & { network: keyof typeof RPC_DEFAULT },
    config?: any
) => {

    // get account type

    const client = new JsonRpcProvider(RPC_DEFAULT[parameters.network])
    // populate the tx, only send the tx if a wallet is provided,
    const accountType: { accType: number } = await client.send('kaia_getAccount', [parameters.sender, 'latest'])


    const res: any = {
        from: parameters.sender,
        to: parameters.contractAddress,
        data: new AbiFactory({
            ...(parameters as Partial<TokenTransferPayload>),
            type: 'erc20',
        }).createParams(),
        type: undefined
    }
    if (isKlaytnAccountKeyType(accountType.accType)) {
        res.type = TxType.SmartContractExecution
    }
    if (!config?.privateKey) {
        return res;
    }
    // if a local account exist, send the tx.
    const wallet = new Wallet(config?.privateKey)
    const sentTx = await wallet.sendTransaction(res)
    return {
        ...res, txHash: sentTx.hash
    }
};
