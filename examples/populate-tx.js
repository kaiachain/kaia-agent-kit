const { Packages } = require('../dist/index');

(async () => {
    const res = await Packages.web3.Services.transferErc20({
        network: 'kairos',
        receiver: '0xa2a8854b1802d8cd5de631e690817c253d6a9153',
        sender: '0xa2a8854b1802d8cd5de631e690817c253d6a9153',
        amount: '100000'
    })
    console.log(res);

})()
