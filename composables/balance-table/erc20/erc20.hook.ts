import { erc20Abi } from './erc20.abi';
import { Erc20 } from './erc20.type';
import { web3 } from '../web3/web3';

export const useErc20 = (address: string) =>
  new web3.eth.Contract(erc20Abi, address) as unknown as Erc20;
