import { ethers } from 'ethers'

import CanvasABI from '../../artifacts/contracts/Canvas.sol/Canvas.json'
import CounterABI from '../../artifacts/contracts/Counter.sol/Counter.json'
import GreeterABI from '../../artifacts/contracts/Greeter.sol/Greeter.json'

const provider = new ethers.providers.Web3Provider(window.ethereum)

export const Greeter = new ethers.Contract(
  '0x6de6baDcC399a836258fa92d91EbA0a02cC40eE2',
  GreeterABI.abi,
  provider
)

export const Counter = new ethers.Contract(
  '0x1F78AC65DCF6F7B696B5175D7D5E516FE07636a9',
  CounterABI.abi,
  provider
)

export const Canvas = new ethers.Contract(
  '0xbF7722a9b3C27143C40d6a6e0089C78ddda4D82A',
  CanvasABI.abi,
  provider
)