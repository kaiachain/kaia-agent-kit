import { Packages } from "../src/index";
import { http, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { kairos, kaia } from "viem/chains";
import { viem } from "@goat-sdk/wallet-viem";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const account = privateKeyToAccount(
  process.env.PRIVATE_KEY as `0x${string}` || "0x0000000000000000000000000000000000000000000000000000000000000000"
);

const walletClient = createWalletClient({
  account: account,
  transport: http(process.env.KAIROS_RPC_URL || "https://public-en-kairos.node.kaia.io"),
  chain: kairos,
});

Packages.web3.Services.transferFaucet(
  {
    receiver: process.env.RECEIVER_ADDRESS || "",
  },
  {
    KAIROS_FAUCET_AMOUNT: process.env.KAIROS_FAUCET_AMOUNT || "1",
  },
  viem(walletClient)
).then((hash: any) => {
  console.log(hash);
});
