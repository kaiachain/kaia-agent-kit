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
exports.getTransactionsByBlockNumber = exports.getTransactionsByAccount = exports.getLatestBlock = exports.getBlockInfo = exports.getKaiaInfo = exports.getNFTBalance = exports.getFTBalance = exports.getCurrentBalance = exports.getAccountOverview = void 0;
var zod_1 = require("zod");
var getAccountOverview_1 = require("./examples/getAccountOverview");
var getBlock_1 = require("./examples/getBlock");
var getCurrentBalance_1 = require("./examples/getCurrentBalance");
var getFTBalanceDetails_1 = require("./examples/getFTBalanceDetails");
var getKaiaInfo_1 = require("./examples/getKaiaInfo");
var getLatestBlock_1 = require("./examples/getLatestBlock");
var getNFTBalance_1 = require("./examples/getNFTBalance");
var getTransactionsByAccount_1 = require("./examples/getTransactionsByAccount");
var getTransactionsByBlock_1 = require("./examples/getTransactionsByBlock");
/* Function names are same as the function names in the services.ts file */
exports.getAccountOverview = {
    name: 'get_account_overview',
    description: 'Get the Account Overview for a given address and network (kaia or kairos)',
    params: zod_1.z.object({
        address: zod_1.z.string(),
        network: zod_1.z.string()
    }),
    similes: ["get_account_overview"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: getAccountOverview_1.getAccountOverviewExamples
};
exports.getCurrentBalance = {
    name: 'get_current_balance',
    description: 'Get the current balance for a given address and network (kaia or kairos)',
    params: zod_1.z.object({
        address: zod_1.z.string(),
        network: zod_1.z.string()
    }),
    similes: ["get_current_balance"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: getCurrentBalance_1.getCurrentBalanceExamples,
};
exports.getFTBalance = {
    name: 'get_ft_balance',
    description: 'Get the Fungible token or ft or erc20 or kip 7 balances for a given address and network',
    params: zod_1.z.object({
        address: zod_1.z.string(),
        network: zod_1.z.string()
    }),
    similes: ["get_ft_balance"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: getFTBalanceDetails_1.getFTBalanceDetailsExamples,
};
exports.getNFTBalance = {
    name: 'get_nft_balance_details',
    description: 'Get the Non-Fungible token or nft or erc721 or kip17 balances for a given address and network (kaia or kairos)',
    params: zod_1.z.object({
        address: zod_1.z.string(),
        network: zod_1.z.string()
    }),
    similes: ["get_nft_balance_details"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: getNFTBalance_1.getNFTBalanceExamples,
};
exports.getKaiaInfo = {
    name: 'get_kaia_info',
    description: 'Get the kaia current info or kaia overview about Kaia Token or gets current kaia price',
    params: zod_1.z.object({}),
    similes: ["get_kaia_info"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: getKaiaInfo_1.getKaiaInfoExamples,
};
exports.getBlockInfo = {
    name: 'get_block_info',
    description: 'Get the block info for a given block number and network (kaia or kairos)',
    params: zod_1.z.object({
        blockNumber: zod_1.z.number(),
        network: zod_1.z.string()
    }),
    similes: ["get_block_info"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: getBlock_1.getBlockExamples,
};
exports.getLatestBlock = {
    name: 'get_latest_block',
    description: 'Get the latest block number or block height for a given network (kaia or kairos)',
    params: zod_1.z.object({
        network: zod_1.z.string()
    }),
    similes: ["get_latest_block"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: getLatestBlock_1.getLatestBlockExamples,
};
exports.getTransactionsByAccount = {
    name: 'get_transactions_by_account',
    description: 'Get the transactions for given address and network (kaia or kairos)',
    params: zod_1.z.object({
        address: zod_1.z.string(),
        network: zod_1.z.string()
    }),
    similes: ["get_transactions_by_account"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: getTransactionsByAccount_1.getTransactionsByAccountExamples,
};
exports.getTransactionsByBlockNumber = {
    name: 'get_transactions_by_block_number',
    description: 'Get the transactions for given block number and network (kaia or kairos)',
    params: zod_1.z.object({
        blockNumber: zod_1.z.number(),
        network: zod_1.z.string()
    }),
    similes: ["get_transactions_by_block_number"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: getTransactionsByBlock_1.getTransactionsByBlockExamples,
};
