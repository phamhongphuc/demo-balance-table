import { erc20Abi } from './erc20.abi';
import { Erc20 } from './Erc20.type';
import Web3 from 'web3';

export const web3 = new Web3('https://data-seed-prebsc-2-s2.binance.org:8545/');

// export const erc20Instance = (address: string) => {
//   return new web3.eth.Contract(erc20Abi, address) as unknown as Erc20;
// };
