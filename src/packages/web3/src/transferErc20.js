"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferErc20 = void 0;
var token_1 = require("../utils/token");
var ethers_ext_1 = require("@kaiachain/ethers-ext");
var viem_1 = require("viem");
var helper_1 = require("../utils/helper");
function getContractDecimals(contractAddress, walletClient) {
    return __awaiter(this, void 0, void 0, function () {
        var functionSignature, functionHash, selector, result, decimals, result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    if (!walletClient.call) return [3 /*break*/, 2];
                    functionSignature = new TextEncoder().encode("decimals()");
                    functionHash = (0, viem_1.keccak256)(functionSignature);
                    selector = functionHash.slice(0, 10);
                    return [4 /*yield*/, walletClient.call({
                            to: contractAddress,
                            data: selector,
                        })];
                case 1:
                    result = _a.sent();
                    decimals = parseInt(result, 16);
                    return [2 /*return*/, decimals];
                case 2:
                    if (!walletClient.read) return [3 /*break*/, 4];
                    return [4 /*yield*/, walletClient.read({
                            address: contractAddress,
                            abi: [
                                {
                                    constant: true,
                                    inputs: [],
                                    name: "decimals",
                                    outputs: [
                                        {
                                            name: "",
                                            type: "uint8",
                                        },
                                    ],
                                    payable: false,
                                    stateMutability: "view",
                                    type: "function",
                                },
                            ],
                            functionName: "decimals",
                            args: [],
                        })];
                case 3:
                    result = _a.sent();
                    return [2 /*return*/, (result === null || result === void 0 ? void 0 : result.value) || 18];
                case 4: throw new Error("Problem calculating the decimals");
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.error("Error fetching decimals:", err_1);
                    throw err_1;
                case 7: return [2 /*return*/];
            }
        });
    });
}
// Function to format amount based on token decimals
function formatTokenAmount(amount, decimals) {
    // Convert amount to string to handle all input types consistently
    var amountStr = amount.toString();
    // Check if amount already includes decimal point
    if (amountStr.includes('.')) {
        // Split by decimal point
        var _a = amountStr.split('.'), integerPart = _a[0], fractionalPart = _a[1];
        // Pad the fractional part with zeros if needed
        var paddedFractionalPart = fractionalPart.padEnd(decimals, '0').slice(0, decimals);
        // Combine and convert to bigint
        return BigInt(integerPart + paddedFractionalPart);
    }
    else {
        // No decimal point, just multiply by 10^decimals
        return BigInt(amountStr) * Math.pow(BigInt(10), BigInt(decimals));
    }
}
var transferErc20 = function (parameters, config, walletClient) { return __awaiter(void 0, void 0, void 0, function () {
    var sender, accountType, decimals, res, sentTx, transactionHash, err_2;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                sender = walletClient.address ||
                    ((_a = walletClient.account) === null || _a === void 0 ? void 0 : _a.address) ||
                    walletClient.getAddress();
                return [4 /*yield*/, (0, helper_1.getAccount)(walletClient, sender)];
            case 1:
                accountType = _c.sent();
                parameters.sender = sender;
                return [4 /*yield*/, getContractDecimals(parameters.contractAddress, walletClient)];
            case 2:
                decimals = _c.sent();
                // Format the amount based on token decimals
                parameters.amount = formatTokenAmount(parameters.amount, decimals);
                res = {
                    from: sender,
                    to: parameters.contractAddress,
                    data: new token_1.AbiFactory(__assign(__assign({}, parameters), { type: "erc20" })).createParams(),
                    type: undefined,
                };
                if (((_b = walletClient.provider) === null || _b === void 0 ? void 0 : _b.kaia) &&
                    (0, ethers_ext_1.isKlaytnAccountKeyType)(accountType.accType)) {
                    res.type = ethers_ext_1.TxType.SmartContractExecution;
                }
                return [4 /*yield*/, walletClient.sendTransaction(res)];
            case 3:
                sentTx = _c.sent();
                transactionHash = sentTx.hash || sentTx;
                return [2 /*return*/, {
                        transactionHash: transactionHash,
                        url: "https://kairos.kaiascan.io/tx/".concat(transactionHash)
                    }];
            case 4:
                err_2 = _c.sent();
                console.log(err_2);
                throw err_2;
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.transferErc20 = transferErc20;
