"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.KaiaPlugin = void 0;
exports.Kaia = Kaia;
var core_1 = require("@goat-sdk/core");
var index_1 = require("./index");
var KaiaPlugin = /** @class */ (function (_super) {
    __extends(KaiaPlugin, _super);
    function KaiaPlugin(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, "kaia", []) || this;
        // For EVM-specific plugin, we check if the chain is EVM compatible
        _this.supportsChain = function (chain) {
            return chain.type === "evm";
        };
        _this.config = config;
        return _this;
    }
    KaiaPlugin.prototype.getTools = function (walletClient) {
        var tools = [];
        var config = this.config;
        var packagesEnabled = (config.packages ||
            []);
        for (var _i = 0, _a = Object.entries(index_1.Packages); _i < _a.length; _i++) {
            var _b = _a[_i], pkgName = _b[0], pkg = _b[1];
            if (packagesEnabled.length > 0 &&
                !packagesEnabled.includes(pkgName)) {
                continue;
            }
            var services = pkg.Services || {};
            var metadata = pkg.Metadata || {};
            var _loop_1 = function (serviceName, serviceFn) {
                var meta = metadata[serviceName];
                if (meta) {
                    var tool = {
                        info: {
                            name: meta.name,
                            description: meta.description,
                            parameters: meta.params,
                        },
                        handler: function (parameters) {
                            return serviceFn(parameters, config, walletClient);
                        },
                    };
                    tools.push((0, core_1.createTool)(tool.info, tool.handler));
                }
            };
            for (var _c = 0, _d = Object.entries(services); _c < _d.length; _c++) {
                var _e = _d[_c], serviceName = _e[0], serviceFn = _e[1];
                _loop_1(serviceName, serviceFn);
            }
        }
        return tools;
    };
    return KaiaPlugin;
}(core_1.PluginBase));
exports.KaiaPlugin = KaiaPlugin;
function Kaia(config) {
    if (config === void 0) { config = {}; }
    return new KaiaPlugin(config);
}
