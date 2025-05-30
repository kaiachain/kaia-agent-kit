"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbiFactory = void 0;
var assert_1 = require("assert");
var viem_1 = require("viem");
var AbiFactory = /** @class */ (function () {
    function AbiFactory(params) {
        this.params = params;
    }
    AbiFactory.prototype.getErc20Params = function () {
        var abi = [
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
        (0, assert_1.default)(this.params.receiver && this.params.amount, "invalid params for transfer erc20");
        var args = [this.params.receiver, this.params.amount];
        var functionName = "transfer";
        return { abi: abi, args: args, functionName: functionName };
    };
    AbiFactory.prototype.getErc721Params = function () {
        var abi = [
            {
                constant: false,
                inputs: [
                    { "name": "from", "type": "address" },
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
        (0, assert_1.default)(this.params.sender && this.params.receiver && this.params.tokenId, "invalid params for transfer erc721");
        var args = [
            this.params.sender,
            this.params.receiver,
            this.params.tokenId,
        ];
        var functionName = "transferFrom";
        return { abi: abi, args: args, functionName: functionName };
    };
    AbiFactory.prototype.getErc1155Params = function () {
        var abi = [
            {
                constant: false,
                inputs: [
                    {
                        name: "from",
                        type: "address",
                    },
                    {
                        name: "to",
                        type: "address",
                    },
                    {
                        name: "id",
                        type: "uint256",
                    },
                    {
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        name: "data",
                        type: "bytes",
                    },
                ],
                name: "safeTransferFrom",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
        ];
        (0, assert_1.default)(this.params.sender &&
            this.params.receiver &&
            this.params.tokenId &&
            this.params.amount, "invalid params for transfer erc1155");
        var args = [
            this.params.sender,
            this.params.receiver,
            this.params.tokenId,
            this.params.amount,
            "",
        ];
        var functionName = "safeTransferFrom";
        return { abi: abi, args: args, functionName: functionName };
    };
    AbiFactory.prototype.createParams = function () {
        var params;
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
        var abi = params.abi, args = params.args, functionName = params.functionName;
        return (0, viem_1.encodeFunctionData)({
            abi: abi,
            functionName: functionName,
            args: args,
        });
    };
    return AbiFactory;
}());
exports.AbiFactory = AbiFactory;
