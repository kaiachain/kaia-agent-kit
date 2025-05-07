import { Packages } from "../src/index";
import { kairos, kaia } from "viem/chains";
import { JsonRpcProvider, Wallet } from "@kaiachain/ethers-ext";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const client = new JsonRpcProvider(process.env.KAIROS_RPC_URL || kairos.rpcUrls.default.http[0]);
const wallet = new Wallet(process.env.PRIVATE_KEY || "", client);

Packages.web3.Services.transferFaucet(
  {
    receiver: process.env.RECEIVER_ADDRESS || "",
  },
  {
    KAIROS_FAUCET_AMOUNT: process.env.KAIROS_FAUCET_AMOUNT || "1",
  },
  wallet
).then((hash: any) => {
  console.log(hash);
});
