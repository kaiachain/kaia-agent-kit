declare module '@kaiachain/ethers-ext' {
  export const isKlaytnAccountKeyType: (accountType: number) => boolean;
  export enum TxType {
    SmartContractExecution,
    ValueTransfer
  }
}

declare module 'viem' {
  export function keccak256(bytes: Uint8Array): string;
  export function parseEther(value: string): bigint;
  export function encodeFunctionData(params: EncodeFunctionDataParameters): string;
  export interface EncodeFunctionDataParameters {
    abi: any[];
    functionName: string;
    args: any[];
  }
}