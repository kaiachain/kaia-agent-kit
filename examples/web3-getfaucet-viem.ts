import { Packages } from "../src/index";

import { http, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { kairos, kaia } from "viem/chains";

const account = privateKeyToAccount(
  "0x-your-private-key"
);

const walletClient = createWalletClient({
  account: account,
  transport: http("https://public-en-kairos.node.kaia.io"),
  chain: kairos,
});

Packages.web3.Services.transferFaucet(
  {
    receiver:
      "0xe45CEA5135167451e16175f7B58E9912CF1d8b63",
  },
  {
    KAIROS_FAUCET_AMOUNT: "1",
  },
  walletClient
).then((hash: any) => {
  console.log(hash);
});
