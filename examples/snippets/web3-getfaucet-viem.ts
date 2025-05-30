import { Packages } from "../../src/index";
import 'dotenv/config';

import { http, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { kairos, kaia } from "viem/chains";
import { viem } from "@goat-sdk/wallet-viem";

const privateKey = process.env.WALLET_PRIVATE_KEY || "";
// Ensure the key has the correct format (0x prefix) and proper type
const formattedKey = privateKey.startsWith('0x') ? privateKey as `0x${string}` : `0x${privateKey}` as `0x${string}`;
const account = privateKeyToAccount(formattedKey);

const walletClient = createWalletClient({
  account: account,
  transport: http(process.env.RPC_PROVIDER_URL || "https://public-en-kairos.node.kaia.io"),
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
