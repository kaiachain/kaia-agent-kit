import { isKlaytnAccountKeyType, JsonRpcProvider, TxType } from "@kaiachain/ethers-ext";
import {  TokenTransferPayload } from "../utils/token";
import { RPC_DEFAULT } from "../../../utils/constants";
import { Wallet } from "@kaiachain/ethers-ext";


export const transferNativeToken = async (
    parameters: Omit<TokenTransferPayload, 'type' | 'tokenId' | 'contractAddress' > & { network: keyof typeof RPC_DEFAULT },
    config?: any // local wallet config
) => {

    // get account type
    const client = new JsonRpcProvider(RPC_DEFAULT[parameters.network])
    // populate the tx, only send the tx if a wallet is provided,
    const accountType: { accType: number } = await client.send('kaia_getAccount', [parameters.sender, 'latest'])

    const res: any = {
        from: parameters.sender,
        to: parameters.receiver,
        value: parameters.amount,
        type: undefined
    }
    if (isKlaytnAccountKeyType(accountType.accType)) {
        res.type = TxType.ValueTransfer
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
