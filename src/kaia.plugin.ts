import { Chain, PluginBase, ToolBase, createTool } from "@goat-sdk/core";
import { EVMWalletClient } from "@goat-sdk/wallet-evm";
import { Packages, PackagesEnum } from "./index";

export class KaiaPlugin extends PluginBase<EVMWalletClient> {
  private config: Record<string, unknown>;

  constructor(config: Record<string, unknown> = {}) {
    super("kaia", []);
    this.config = config;
  }

  // For EVM-specific plugin, we check if the chain is EVM compatible
  supportsChain = (chain: Chain) => {
    return chain.type === "evm";
  };

  getTools(walletClient: EVMWalletClient) {
    const tools: ToolBase[] | Promise<ToolBase[]> = [];
    const config = this.config;
    const packagesEnabled: PackagesEnum[] = (config.packages ||
      []) as PackagesEnum[];

    for (const [pkgName, pkg] of Object.entries(Packages)) {
      if (
        packagesEnabled.length > 0 &&
        !packagesEnabled.includes(pkgName as PackagesEnum)
      ) {
        continue;
      }
      const services =
        (pkg as { Services?: Record<string, unknown> }).Services || {};
      const metadata: any = pkg.Metadata || {};

      for (const [serviceName, serviceFn] of Object.entries(services)) {
        const meta = metadata[serviceName] || {};
        if (meta) {
          const tool = {
            info: {
              name: meta.name,
              description: meta.description,
              parameters: meta.params,
            },
            handler: (parameters: unknown) =>
              (
                serviceFn as (
                  params: unknown,
                  config: unknown,
                  client: EVMWalletClient
                ) => unknown
              )(parameters, config, walletClient),
          };

          tools.push(createTool(tool.info, tool.handler));
        }
      }
    }

    return tools;
  }
}

export function Kaia(config: Record<string, unknown> = {}) {
  return new KaiaPlugin(config);
}
