import { Packages } from "../src/index";

import { kairos, kaia } from "viem/chains";
import { JsonRpcProvider, Wallet } from "@kaiachain/ethers-ext";
const client = new JsonRpcProvider(kairos.rpcUrls.default.http[0])
const wallet = new Wallet("0x-your-private-key", client)

Packages.web3.Services.transferFaucet(
  {
    receiver:
      "0xe45CEA5135167451e16175f7B58E9912CF1d8b63",
  },
  {
    KAIROS_FAUCET_AMOUNT: "1",
  },
  wallet
).then((hash: any) => {
  console.log(hash);
});
