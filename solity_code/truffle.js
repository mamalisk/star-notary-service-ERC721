var HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = 'people gadget squeeze way extend open milk agree purpose earth reveal crunch';

module.exports = {
  networks: { 
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: "*"
    }, 
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/844dfbee03e94fdcaf2f3fd308e6928b'),
      network_id: 4,
      gas : 4700000
    },
  }
};