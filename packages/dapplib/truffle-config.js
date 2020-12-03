require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift raise mad slow give clinic slot ghost'; 
let testAccounts = [
"0x42cf36062241b843ff427f0328ae0a3308b0c8d06086d2d8d3a48f0afc18f10a",
"0x19b48a1f465c91e1f4bbb0091ce41d9d03fae8dbdbcb2346a493c430f929cd3e",
"0xad33b58666f69723d1c967d04806ec072ec62bf4d9191f412d7e4bd95c69de61",
"0xc585cba588ab4df64e02ede9ac0be15faec8db82fd23473d2ea19f47884903e1",
"0xe02790032eaf03d7c1421a5ebde131db670b939eeadc17d328e44ecd4c8966f4",
"0x9a6d00340f0c0ac66768b7bb346f837629badc99415f783ce903104e0a1f0986",
"0xf9612d7f87750c650c97d1c4b63f6b13c78be03df44e5e16978224ec27630731",
"0xab83334f48d47521ffa831f1d2a5d019729fa125d17ca03333d350fe90557b10",
"0x5816603651012484cbf4cceb7c9748d6bf14b91a87fd5529bc7ad01833e28d1f",
"0x86d8d8ade5241ecb687201955afa8225c7264cd91d17cc43b4010fa9d01aec67"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
