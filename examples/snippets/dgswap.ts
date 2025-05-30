import { zeroAddress } from "viem";
import { Packages } from "../../src/index";

(async () => {
    // pools
    const getBySymbols = await Packages.dgSwap.Services.getPools({
        count: 10,
        skip: 0,
        where: {
            or: [
                { token0_: { symbol: 'USDT' }, token1_: { symbol: 'xGRND' } },
                { token0_: { symbol: 'xGRND' }, token1_: { symbol: 'USDT' } }
            ]
        }
    })
    console.log('get by symbols', getBySymbols);

    const getByAddresses = await Packages.dgSwap.Services.getPools({
        count: 10,
        skip: 0,
        where: {
            or: [
                { token0_: { id: '0x9bcb2efc545f89986cf70d3adc39079a1b730d63' }, token1_: { id: '0x5c13e303a62fc5dedf5b52d66873f2e59fedadc2' } },
                { token0_: { id: '0x5c13e303a62fc5dedf5b52d66873f2e59fedadc2' }, token1_: { id: '0x9bcb2efc545f89986cf70d3adc39079a1b730d63' } }
            ]
        }
    })
    console.log('get by addresses', getByAddresses);

    // factories
    console.log('get factories ', await Packages.dgSwap.Services.getFactories(100, 0, { owner: zeroAddress }))

    // tokens
    console.log(await Packages.dgSwap.Services.getTokenDayDatas(100, 0, { id: '0x754288077d0ff82af7a5317c7cb8c444d421d103' }))

    // transactions
    console.log('get mint transactions ', await Packages.dgSwap.Services.getMintsTransactions(100, 0, { pool: '0x27ce70da1be2b4a075786cf54dd143a35e7ac949' }))

    console.log('get swap transactions ', await Packages.dgSwap.Services.getSwapsTransactions(100, 0, { pool: '0x27ce70da1be2b4a075786cf54dd143a35e7ac949' }))
    console.log('get transactions ', await Packages.dgSwap.Services.getTransactions(100, 0))


    // misc
    console.log('get bundles', await Packages.dgSwap.Services.getBundles(10, 0));
    console.log('get collects', await Packages.dgSwap.Services.getCollects(10, 0));
    console.log('get flashes', await Packages.dgSwap.Services.getFlashes(10, 0));
    console.log('get pancake datas', await Packages.dgSwap.Services.getPancakeDayDatas(10, 0));
    console.log('get positions', await Packages.dgSwap.Services.getPositions(10, 0));
    console.log('get position snapshots', await Packages.dgSwap.Services.getPositionSnapshots(10, 0));


})();
