# ChatGPT
## 🚀 Quickstart

This example demonstrates how to allow a [ChatGPT](https://chatgpt.com) agent to **send and receive KAIA and other tokens on Kaia network.

## How it works
ChatGPT allows you to create GPTs that can use external tools via API calls. This demo will generate a REST API server that will have:
1. An endpoint for each GOAT tool you install.
2. An endpoint to list all available tools and their parameters.
3. An OpenAPI specification endpoint to visualize the API.

This API can then be exposed with ngrok and connected to your own GPT.

## Requirements
1. A ChatGPT account.
2. ngrok installed and configured.

## Setup
1. Clone the repository:
```bash
git clone the repo

2. Run the following commands from the `typescript` directory:
```bash
cd typescript
pnpm install
pnpm build
```

3. Go to the example directory:
```bash
cd examples/framework/chatgpt
```

4. Copy the `.env.template` and populate with your values:
```bash
cp .env.template .env
```
- `OPENAI_API_KEY`
- `WALLET_PRIVATE_KEY`
- `RPC_PROVIDER_URL`

## Usage
1. Run the interactive CLI:
```bash
pnpm ts-node index.ts
```

2. Expose the API with ngrok:
```bash
ngrok http http://localhost:3000
```

3. Go to the ChatGPT, click on "Explore GPTs" and there click on "Create".

4. Give your GPT a name and description.

5. Click on "Create new action"

6. Click on import from URL and paste the ngrok URL with this path:
```
https://<ngrok-url>/api-docs/openapi.json
```

7. All tools should now be visible in the GPT.

8. Save your GPT and you should be able to use the tools in the chat:
- Check your balance for ERC-20 tokens
- Send ERC-20 or KAIA tokens to another address
- Check your balance again to see the tokens you just sent.
