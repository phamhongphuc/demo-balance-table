import BigNumber from 'bignumber.js';
import { reactive } from 'vue';
import { baseToken, TokenData } from './token';

export const balanceMap = reactive(new Map<string, string>());

export const getBalance = (address: string, token: TokenData) =>
  balanceMap.get(`${address}-${token.address}`);
export const setBalance = async (
  address: string,
  token: TokenData,
  value: string | null = null
) => {
  let balance = value || getBalance(address, token);
  if (!balance && token.instance) {
    balance = await token.instance.methods.balanceOf(address).call();
    balance = new BigNumber(balance)
      .shiftedBy(-baseToken.decimals)
      .decimalPlaces(4)
      .toFormat();
  }
  balanceMap.set(`${address}-${token.address}`, balance);
};
