const { Packages } = require('../dist/index.js');
(async () => {
    const getBySymbols = await Packages.dgSwap.Services.getPoolByTokenSymbol('USDT', 'xGRND')
    console.log('get by symbols', getBySymbols);

    const getByAddresses = await Packages.dgSwap.Services.getPoolByTokenAddress('0x9bcb2efc545f89986cf70d3adc39079a1b730d63', '0x5c13e303a62fc5dedf5b52d66873f2e59fedadc2')
    console.log('get by addresses', getByAddresses);

    console.log(await Packages.dgSwap.Services.getPoolDayData('0x00374284dd66f75134e51fab9e522dc322431c48',100))
    console.log(await Packages.dgSwap.Services.getTokenDayData('0x754288077d0ff82af7a5317c7cb8c444d421d103',100))

})();
