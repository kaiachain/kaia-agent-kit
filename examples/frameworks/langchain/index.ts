import readline from "node:readline";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { http } from "viem";
import { createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";

import { getOnChainTools } from "@goat-sdk/adapter-langchain";
import { PEPE, USDC, erc20 } from "@goat-sdk/plugin-erc20";
import { sendETH } from "@goat-sdk/wallet-evm";
import { viem } from "@goat-sdk/wallet-viem";

require("dotenv").config();

// Create a wallet client
const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`);
const walletClient = createWalletClient({
    account: account,
    transport: http(process.env.RPC_PROVIDER_URL),
    chain: baseSepolia,
});

async function handleCommand(command: string, tools: any[]): Promise<string> {
    // Extract command and parameters
    const parts = command.toLowerCase().split(" ");
    
    if (parts[0] === "send" && parts[1] === "eth") {
        const amount = parts[2];
        const to = parts[3];
        if (!amount || !to) {
            return "Please specify amount and address. Format: send eth [amount] [address]";
        }
        const sendTool = tools.find(t => t.name === "send_ETH");
        if (sendTool) {
            try {
                await sendTool.invoke({ amount, to });
                return `Successfully sent ${amount} ETH to ${to}`;
            } catch (error: any) {
                return `Error sending ETH: ${error?.message || 'Unknown error'}`;
            }
        }
    }
    
    if (parts[0] === "balance") {
        const address = parts[1] || account.address;
        const balanceTool = tools.find(t => t.name === "get_balance");
        if (balanceTool) {
            try {
                const balance = await balanceTool.invoke({ address });
                return `Balance for ${address}: ${balance} ETH`;
            } catch (error: any) {
                return `Error getting balance: ${error?.message || 'Unknown error'}`;
            }
        }
    }

    if (parts[0] === "token" && parts[1] === "balance") {
        const symbol = parts[2]?.toUpperCase();
        if (!symbol) {
            return "Please specify token symbol. Format: token balance [symbol]";
        }
        const infoTool = tools.find(t => t.name === "get_token_info_by_symbol");
        const balanceTool = tools.find(t => t.name === "get_token_balance");
        if (infoTool && balanceTool) {
            try {
                const tokenInfo = await infoTool.invoke({ symbol });
                const balance = await balanceTool.invoke({
                    wallet: account.address,
                    tokenAddress: tokenInfo.address
                });
                return `${symbol} balance: ${balance}`;
            } catch (error: any) {
                return `Error getting token balance: ${error?.message || 'Unknown error'}`;
            }
        }
    }

    if (parts[0] === "help") {
        return `Available commands:
- send eth [amount] [address]
- balance [address]
- token balance [symbol]
- help
- exit`;
    }

    return "Unknown command. Type 'help' for available commands.";
}

(async (): Promise<void> => {
    try {
        console.log("Initializing tools...");
        const tools = await getOnChainTools({
            wallet: viem(walletClient),
            plugins: [sendETH() as any, erc20({ tokens: [USDC, PEPE] }) as any],
        });
        console.log("Tools initialized!");
        
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        console.log("\nBlockchain CLI Ready!");
        console.log("Type 'help' for available commands");
        
        while (true) {
            const userInput = await new Promise<string>((resolve) => {
                rl.question("\nEnter command: ", resolve);
            });

            if (userInput.toLowerCase() === "exit") {
                rl.close();
                break;
            }

            try {
                const response = await handleCommand(userInput, tools);
                console.log(response);
            } catch (error: any) {
                console.error("Error:", error?.message || 'Unknown error');
            }
        }
    } catch (error: any) {
        console.error("Fatal error:", error?.message || 'Unknown error');
    }
})();
