import { isKlaytnAccountKeyType, JsonRpcProvider, TxType } from "@kaiachain/ethers-ext";
import { AbiFactory, TokenTransferPayload } from "../utils/token";
import { RPC_DEFAULT } from "../../../utils/constants";
import { Wallet } from "@kaiachain/ethers-ext";


export const transferErc1155 = async (
    parameters: Omit<TokenTransferPayload, 'type'> & { network: keyof typeof RPC_DEFAULT },
    config?: any // local wallet config
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
            type: 'erc1155'
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
