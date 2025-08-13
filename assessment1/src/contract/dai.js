const ERC20_ABI = [
  "function totalSupply() view returns (uint256)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)"
];
require('dotenv').config();



// Check if the RPC URL is available
const rpcUrl ="https://eth-sepolia.g.alchemy.com/v2/4oRl90WKrEONtjQQhYIXs";
if (!rpcUrl) {
  throw new Error("ALCHEMY_RPC_URL is not defined in your .env file.");
}


// The DAI contract address on the Sepolia testnet
// the current contract address i used here is for WETH, you can change it to any contract address of your preference and restart server.
const DAI_CONTRACT_ADDRESS = '0xf531b8f309be94191af87605cfbf600d71c2cfe0';


module.exports = {
  DAI_CONTRACT_ADDRESS,
  ERC20_ABI,
  rpcUrl
};