// Token contract addresses for different networks
// These would be the actual deployed contract addresses

export const TOKEN_ADDRESSES = {
  // Mainnet addresses (example - replace with actual addresses)
  mainnet: {
    USDT: '0x...', // Replace with actual USDT contract address
    USDC: '0x...', // Replace with actual USDC contract address  
    BTC: '0x...',  // Replace with actual BTC contract address
  },
  // Testnet addresses (example - replace with actual addresses)
  testnet: {
    USDT: '0x...', // Replace with actual testnet USDT contract address
    USDC: '0x...', // Replace with actual testnet USDC contract address
    BTC: '0x...',  // Replace with actual testnet BTC contract address
  },
  // Sepolia testnet addresses (example - replace with actual addresses)
  sepolia: {
    USDT: '0x...', // Replace with actual Sepolia USDT contract address
    USDC: '0x...', // Replace with actual Sepolia USDC contract address
    BTC: '0x...',  // Replace with actual Sepolia BTC contract address
  }
}

export const getTokenAddress = (token: 'USDT' | 'USDC' | 'BTC', network: 'mainnet' | 'testnet' | 'sepolia' = 'sepolia'): string => {
  return TOKEN_ADDRESSES[network][token]
}

// Yield contract addresses for different protocols and networks
export const YIELD_CONTRACT_ADDRESSES = {
  // Mainnet addresses (example - replace with actual addresses)
  mainnet: {
    COMPOUND: '0x...', // Replace with actual Compound contract address
    AAVE: '0x...',      // Replace with actual Aave contract address
    YIELD_PROTOCOL: '0x...', // Replace with actual Yield Protocol contract address
  },
  // Testnet addresses (example - replace with actual addresses)
  testnet: {
    COMPOUND: '0x...', // Replace with actual testnet Compound contract address
    AAVE: '0x...',      // Replace with actual testnet Aave contract address
    YIELD_PROTOCOL: '0x...', // Replace with actual testnet Yield Protocol contract address
  },
  // Sepolia testnet addresses (example - replace with actual addresses)
  sepolia: {
    COMPOUND: '0x...', // Replace with actual Sepolia Compound contract address
    AAVE: '0x...',      // Replace with actual Sepolia Aave contract address
    YIELD_PROTOCOL: '0x...', // Replace with actual Sepolia Yield Protocol contract address
  }
}

export const getYieldContractAddress = (protocol: 'COMPOUND' | 'AAVE' | 'YIELD_PROTOCOL', network: 'mainnet' | 'testnet' | 'sepolia' = 'sepolia'): string => {
  return YIELD_CONTRACT_ADDRESSES[network][protocol]
}
