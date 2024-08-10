import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

export const SUPPORTED_CHAIN = 123;


const fuseSpark = {
  chainId: 123 ,
  name: 'Fuse',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: import.meta.env.VITE_INFURA_RPC
}

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://localhost:5173',
  icons: ['https://localhost:5173']
}

export const configWeb3Modal = () => createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [fuseSpark],
  projectId: import.meta.env.VITE_PROJECT_ID,
  enableAnalytics: false,
  themeVariables: {
    '--w3m-accent': '#9C0F94',
    '--w3m-color-mix': '#070624',
    '--w3m-color-mix-strength': 60,
    '--w3m-border-radius-master': '40'
  }
})