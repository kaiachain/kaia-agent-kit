import assert from "assert";
import { encodeFunctionData, EncodeFunctionDataParameters } from "viem";

export type TokenTransferPayload = {
  sender: `0x${string}`;
  type: "erc20" | "erc721" | "erc1155";
  receiver: `0x${string}`;
  amount: string | bigint | number; // Optional, only needed for erc20 and erc1155
  tokenId: string; // Optional, only needed for erc721 and erc1155
  contractAddress: string;
};

export type FaucetTransferPayload = {
  receiver: `0x${string}`;
};

export class AbiFactory {
  constructor(private params: Partial<TokenTransferPayload>) {}

  private getErc20Params() {
    const abi = [
      {
        constant: false,
        inputs: [
          {
            name: "_to",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        type: "function",
      },
    ];
    assert(
      this.params.receiver && this.params.amount,
      "invalid params for transfer erc20"
    );

    const args = [this.params.receiver, this.params.amount];
    const functionName = "transfer";
    return { abi, args, functionName };
  }

  private getErc721Params() {
    const abi = [
      {
        constant: false,
        inputs: [
          {
            name: "_to",
            type: "address",
          },
          {
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [],
        type: "function",
      },
    ];
    assert(
      this.params.sender && this.params.receiver && this.params.tokenId,
      "invalid params for transfer erc721"
    );
    const args = [
      this.params.sender,
      this.params.receiver,
      this.params.tokenId,
    ];
    const functionName = "transferFrom";
    return { abi, args, functionName };
  }

  private getErc1155Params() {
    const abi = [
      {
        constant: false,
        inputs: [
          {
            name: "_to",
            type: "address",
          },
          {
            name: "_id",
            type: "uint256",
          },
          {
            name: "_value",
            type: "uint256",
          },
          {
            name: "_data",
            type: "bytes",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        type: "function",
      },
    ];
    assert(
      this.params.sender &&
        this.params.receiver &&
        this.params.tokenId &&
        this.params.amount,
      "invalid params for transfer erc1155"
    );
    const args = [
      this.params.sender,
      this.params.receiver,
      this.params.tokenId,
      this.params.amount,
      "",
    ];
    const functionName = "safeTransferFrom";
    return { abi, args, functionName };
  }

  public createParams(): string {
    let params: { abi: any; args: any[]; functionName: string };
    switch (this.params.type) {
      case "erc20":
        params = this.getErc20Params();
        break;
      case "erc721":
        params = this.getErc721Params();
        break;
      case "erc1155":
        params = this.getErc1155Params();
        break;
      default:
        throw new Error("Unsupported token type");
    }
    // encode data
    const { abi, args, functionName } = params;
    return encodeFunctionData({
      abi,
      functionName,
      args,
    } as EncodeFunctionDataParameters);
  }
}
