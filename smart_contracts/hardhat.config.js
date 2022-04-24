require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");
require("@eth-optimism/hardhat-ovm")

module.exports = {
  solidity: "0.8.6",
  networks: {
    rinkeby: {
      url: process.env.a,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygonMumbai: {
      url: process.env.POLYGON_TESTNET_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    optimismKovan: {
      url: process.env.POLYGON_TESTNET_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
      apiKey: process.env.ETHERSCAN_KEY,
      }
    };
