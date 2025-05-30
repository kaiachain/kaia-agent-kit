import { Kaia, PackagesEnum } from "../src/index";

console.log(PackagesEnum.WEB3);

// Provide packages to enable or by default all packages are enabled
const kaia = Kaia({
// packages: [PackagesEnum.WEB3],
});

kaia.getTools();