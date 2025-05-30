"use strict";
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
exports.transferNativeToken = exports.transferErc1155 = exports.transferErc721 = exports.transferErc20 = exports.transferFaucet = void 0;
var zod_1 = require("zod");
var faucet_1 = require("./examples/faucet");
var transferNativeToken_1 = require("./examples/transferNativeToken");
/* Function names are same as the function names in the services.ts file */
exports.transferFaucet = {
    name: 'transfer_test_kaia_coins',
    description: 'transfer test kaia coins for a given receiver address',
    params: zod_1.z.object({
        receiver: zod_1.z.string()
    }),
    similes: ["transfer_test_kaia_coins"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: faucet_1.faucetExamples
};
exports.transferErc20 = {
    name: 'transfer_erc20',
    description: 'transfer erc20/FT/Fungible token for a given receiver address, amount and contract address',
    params: zod_1.z.object({
        receiver: zod_1.z.string(),
        amount: zod_1.z.number(),
        contractAddress: zod_1.z.string(),
        network: zod_1.z.enum(['kaia', 'kairos'])
    }),
    similes: ["transfer_erc20"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [],
};
exports.transferErc721 = {
    name: 'transfer_erc721',
    description: 'transfer erc721/NFT/NonFungible token for a given receiver address, tokenId and contract address',
    params: zod_1.z.object({
        receiver: zod_1.z.string(),
        tokenId: zod_1.z.string(),
        contractAddress: zod_1.z.string(),
        network: zod_1.z.enum(['kaia', 'kairos'])
    }),
    similes: ["transfer_erc721"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [],
};
exports.transferErc1155 = {
    name: 'transfer_erc1155',
    description: 'transfer erc1155/multi token for a given receiver address, tokenId, amount and contract address',
    params: zod_1.z.object({
        receiver: zod_1.z.string(),
        amount: zod_1.z.number(),
        tokenId: zod_1.z.string(),
        contractAddress: zod_1.z.string(),
        network: zod_1.z.enum(['kaia', 'kairos'])
    }),
    similes: ["transfer_erc1155"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [],
};
exports.transferNativeToken = {
    name: 'transfer_native_token',
    description: 'transfer native token for a given receiver address, amount and network',
    params: zod_1.z.object({
        receiver: zod_1.z.string(),
        amount: zod_1.z.number(),
        network: zod_1.z.enum(['kaia', 'kairos'])
    }),
    similes: ["transfer_native_token"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [transferNativeToken_1.transferExamples],
};
