"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../src/index");
require("dotenv/config");
var chains_1 = require("viem/chains");
var ethers_ext_1 = require("@kaiachain/ethers-ext");
var client = new ethers_ext_1.JsonRpcProvider(process.env.RPC_PROVIDER_URL || chains_1.kairos.rpcUrls.default.http[0]);
var wallet = new ethers_ext_1.Wallet(process.env.WALLET_PRIVATE_KEY || "0x-your-private-key", client);
index_1.Packages.web3.Services.transferFaucet({
    receiver: "0xe45CEA5135167451e16175f7B58E9912CF1d8b63",
}, {
    KAIROS_FAUCET_AMOUNT: "1",
}, wallet).then(function (hash) {
    console.log(hash);
});
