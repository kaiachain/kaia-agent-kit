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
exports.getTransactions = exports.getSwapTransactions = exports.getMintTransactions = exports.getPositions = exports.getPositionSnapshots = exports.getPancakeDayDatas = exports.getFlashes = exports.getCollects = exports.getBundles = exports.getFactory = exports.getTickHourDatas = exports.getTickDayDatas = exports.getTicks = exports.getTokenHourDatas = exports.getTokenDayData = exports.getTokens = exports.getPoolHourDatas = exports.getPoolDayData = exports.getPools = void 0;
var zod_1 = require("zod");
/* Function names are same as the function names in the services.ts file */
// for params `where` schema, please refer to https://thegraph.com/explorer/subgraphs/DFu3UKnkVWq4xgYq5NFerMu6puA9SkqdMyjjWmauwqqM?view=Query&chain=arbitrum-one
// pools
exports.getPools = {
    name: 'get_pools',
    description: 'Get the dragonswap pool by token symbol',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_pools"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 10,
            skip: 0,
            where: {
                or: [
                    { token0_: { symbol: 'USDT' }, token1_: { symbol: 'xGRND' } },
                    { token0_: { symbol: 'xGRND' }, token1_: { symbol: 'USDT' } }
                ]
            }
        },
        {
            count: 10,
            skip: 0,
            where: {
                or: [
                    { token0_: { id: '0x9bcb2efc545f89986cf70d3adc39079a1b730d63' }, token1_: { id: '0x5c13e303a62fc5dedf5b52d66873f2e59fedadc2' } },
                    { token0_: { id: '0x5c13e303a62fc5dedf5b52d66873f2e59fedadc2' }, token1_: { id: '0x9bcb2efc545f89986cf70d3adc39079a1b730d63' } }
                ]
            }
        }
    ],
};
exports.getPoolDayData = {
    name: 'get_pool_day_data',
    description: 'Get the dragonswap pool day data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_pool_day_data"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
};
exports.getPoolHourDatas = {
    name: 'get_pool_hour_datas',
    description: 'Get the dragonswap pool hour data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_pool_hour_datas"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
};
// tokens
exports.getTokens = {
    name: 'get_tokens',
    description: 'Get the dragonswap token data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_tokens"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
};
exports.getTokenDayData = {
    name: 'get_token_day_data',
    description: 'Get the dragonswap token day data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_token_day_data"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0,
            where: { id: '0x754288077d0ff82af7a5317c7cb8c444d421d103' }
        }
    ],
};
exports.getTokenHourDatas = {
    name: 'get_token_hour_datas',
    description: 'Get the dragonswap token hour data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_token_hour_datas"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
};
// ticks
exports.getTicks = {
    name: 'get_ticks',
    description: 'Get the dragonswap tick data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_ticks"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
};
exports.getTickDayDatas = {
    name: 'get_tick_day_datas',
    description: 'Get the dragonswap tick day data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_tick_day_datas"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
};
exports.getTickHourDatas = {
    name: 'get_tick_hour_datas',
    description: 'Get the dragonswap tick hour data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_tick_hour_datas"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
};
// Factory
exports.getFactory = {
    name: 'get_factory',
    description: 'Get the dragonswap factory data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_factory"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0,
            where: { owner: '0x0000000000000000000000000000000000000000' }
        }
    ],
};
// Bundles
exports.getBundles = {
    name: 'get_bundles',
    description: 'Get the dragonswap bundle data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_bundles"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
};
// Collects
exports.getCollects = {
    name: 'get_collects',
    description: 'Get the dragonswap collect data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_collects"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
};
// Flashes
exports.getFlashes = {
    name: 'get_flashes',
    description: 'Get the dragonswap flash data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_flashes"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
};
// PancakeDayDatas
exports.getPancakeDayDatas = {
    name: 'get_pancake_day_datas',
    description: 'Get the dragonswap pancake day data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_pancake_day_datas"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
};
// PositionSnapshots
exports.getPositionSnapshots = {
    name: 'get_position_snapshots',
    description: 'Get the dragonswap position snapshot data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_position_snapshots"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
};
// Positions
exports.getPositions = {
    name: 'get_positions',
    description: 'Get the dragonswap position data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_positions"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 10,
            skip: 0
        }
    ],
};
// Transactions
exports.getMintTransactions = {
    name: 'get_mint_transactions',
    description: 'Get the dragonswap mint transaction data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_mint_transactions"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0,
            where: { pool: '0x27ce70da1be2b4a075786cf54dd143a35e7ac949' }
        }
    ],
};
exports.getSwapTransactions = {
    name: 'get_swap_transactions',
    description: 'Get the dragonswap swap transaction data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_swap_transactions"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0,
            where: { pool: '0x27ce70da1be2b4a075786cf54dd143a35e7ac949' }
        }
    ],
};
exports.getTransactions = {
    name: 'get_transactions',
    description: 'Get the dragonswap transaction data',
    params: zod_1.z.object({
        count: zod_1.z.number(),
        skip: zod_1.z.number(),
        where: zod_1.z.object({}).optional()
    }),
    similes: ["get_transactions"],
    validate: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); },
    examples: [
        {
            count: 100,
            skip: 0
        }
    ],
};
