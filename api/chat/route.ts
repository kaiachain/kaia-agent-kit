import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Fix BigInt serialization for JSON
// @ts-ignore
(BigInt.prototype as any).toJSON = function() {
  return this.toString();
};

// Import using dynamic import syntax to bypass TypeScript checking
// eslint-disable-next-line @typescript-eslint/no-require-imports
const viem = require('viem');
import { privateKeyToAccount } from "viem/accounts";
import { kairos, kaia } from "viem/chains";
require("dotenv").config();
import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";

import { viem as viemAdapter } from "@goat-sdk/wallet-viem";

import { Kaia, PackagesEnum } from '../../plugins';
//import { Kaia, PackagesEnum } from '@kaiachain/kaia-agent-kit';

const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`);

// Create wallet client with dynamic access
const walletClient = viem.createWalletClient({
    account: account,
    transport: viem.http(process.env.RPC_PROVIDER_URL),
    chain: kairos,
}).extend(viem.walletActions);

console.log(viemAdapter(walletClient).getAddress());

// Specific packages can be enabled by providing PackagesEnum details in packages array below. By default all the packages are enabled.
// Example: packages: [PackagesEnum.WEB3]
const tools = await getOnChainTools({
    wallet: viemAdapter(walletClient),
    plugins: [Kaia({KAIA_KAIASCAN_API_KEY: process.env.KAIASCAN_API_KEY, packages: []})]
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  console.log("#####################################");
  console.log(tools);
  debugger;
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: google('gemini-1.5-pro-latest'),
      tools: tools,
      messages,
      maxSteps: 10,
    });
  
    return result.toDataStreamResponse();
  } catch(err) {
    console.error('Chat API Error:', err);
    return new Response(
      JSON.stringify({ 
        error: 'An error occurred while processing your request',
        details: err instanceof Error ? err.message : 'Unknown error'
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}