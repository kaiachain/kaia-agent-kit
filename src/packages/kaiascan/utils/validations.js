"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var viem_1 = require("viem");
var validations = {};
validations.checkApiKey = function (apiKey) {
    if (!apiKey) {
        throw new Error("Missing API key");
    }
};
validations.checkAddress = function (address) {
    return (0, viem_1.isAddress)(address);
};
validations.checkNetwork = function (network) {
    if (network !== "kairos" && network !== "kaia") {
        throw new Error("Invalid network");
    }
};
exports.default = validations;
