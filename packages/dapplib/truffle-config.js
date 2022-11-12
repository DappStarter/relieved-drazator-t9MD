require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remain mixture gesture spread fringe task'; 
let testAccounts = [
"0x600f89ab0cb8f599609bbc964654a20088710fc4af978d5025c4ea0a07780234",
"0xbdd1a9ad3a2bf8e7466709821beb8236c4e68a8e55f80269358fa07ab800989b",
"0xa41e8dcafda1d6f451eea079f6c5e1dd46d93fc8726b3bd90058bf8aaa203137",
"0x515dea4980e2f2142fadad304f9085c38939cdce30b64ad203254fe11b435649",
"0x05aa63d2218cbae88e5d90d3ec5bacbc0810054774c7d5ab0ff632f2bdb76cae",
"0x900352f12dc6801da9dd2dbf8318126c16546b6f3e78a1777c8214341ce27a8b",
"0x25777866e71b901b417419f6c431c751dd5b2a4a4977f3805ef20602a51b175d",
"0xbe187d4bf37fb6d4cd4e3e1339b6ca6c7db0e8bd2a3ff55d9c7edc67ac316482",
"0xeea498fe0099dd673f2564fda1a01c003da7dc2fe6b34df4b0d63e1482d3e480",
"0x95f29a15ea2c2ad2a4dd7b7f6c18bde51ebc750257e09a657a3a7352e30f85f8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


