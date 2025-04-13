import * as Kaiascan from './packages/kaiascan';
import * as Web3 from './packages/web3';
import * as DgSwap from './packages/dgswap'

export enum PackagesEnum {
  KAIASCAN = 'kaiascan',
  WEB3 = 'web3',
  DGSWAP = 'dgSwap'
}

export const Packages = {
  [PackagesEnum.KAIASCAN]: Kaiascan,
  [PackagesEnum.WEB3]: Web3,
  [PackagesEnum.DGSWAP]: DgSwap
};

export { Kaia, KaiaPlugin } from "./kaia.plugin";

