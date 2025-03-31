import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts", "src/kaia.plugin.ts"],
    format: ["esm", "cjs"],
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    target: "es2017",
});