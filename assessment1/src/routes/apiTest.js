const express = require('express');
const router = express.Router();
const { ethers } = require('ethers');
const { DAI_CONTRACT_ADDRESS, ERC20_ABI, rpcUrl } = require('../contract/dai');



const provider = new ethers.JsonRpcProvider(rpcUrl);

router.get('/', async (req, res) => {
  try {

    
    const daiContract = new ethers.Contract(DAI_CONTRACT_ADDRESS, ERC20_ABI, provider);
    

    const name = await daiContract.name();
    const symbol = await daiContract.symbol();
    const decimals = await daiContract.decimals();
    const totalSupply = await daiContract.totalSupply();
    
    console.log('DAI Token Name:', name);
    console.log('DAI Token Symbol:', symbol);
    console.log('DAI Token Decimals:', decimals);
    console.log('DAI Total Supply:', totalSupply.toString());
    
    res.json({
      name,
      symbol,
      decimals: decimals.toString(),
      totalSupply: totalSupply.toString() 
    });
  } catch (error) {
    console.error('Error fetching contract data:', error);
    res.status(500).json({ error: 'Failed to fetch contract data' });
  }
});

module.exports = router;
