"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KaiaPlugin = exports.Kaia = exports.Packages = exports.PackagesEnum = void 0;
var Kaiascan = require("./packages/kaiascan");
var Web3 = require("./packages/web3");
var DgSwap = require("./packages/dgswap");
var PackagesEnum;
(function (PackagesEnum) {
    PackagesEnum["KAIASCAN"] = "kaiascan";
    PackagesEnum["WEB3"] = "web3";
    PackagesEnum["DGSWAP"] = "dgSwap";
})(PackagesEnum || (exports.PackagesEnum = PackagesEnum = {}));
exports.Packages = (_a = {},
    _a[PackagesEnum.KAIASCAN] = Kaiascan,
    _a[PackagesEnum.WEB3] = Web3,
    _a[PackagesEnum.DGSWAP] = DgSwap,
    _a);
var kaia_plugin_1 = require("./kaia.plugin");
Object.defineProperty(exports, "Kaia", { enumerable: true, get: function () { return kaia_plugin_1.Kaia; } });
Object.defineProperty(exports, "KaiaPlugin", { enumerable: true, get: function () { return kaia_plugin_1.KaiaPlugin; } });
