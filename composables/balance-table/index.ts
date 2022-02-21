import { shallowRef } from 'vue';
import { Erc20 } from './web3/erc20.type';

type TokenData = {
  address: string;
  symbol: string;
  instance: Erc20 | null;
};

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

const tokens = shallowRef<TokenData[]>([
  {
    address: ZERO_ADDRESS,
    symbol: 'BNB',
    instance: null,
  }, //
]);
const addresses = shallowRef([
  '0xA0504881b64BFE2DCFd07cD00086a7A36c5FCfcE',
  '0xD4CD8155F5d38088d226DA93838722A10fB23009',
]);

const tokenInput = shallowRef('');
const addToken = () => {
  console.debug('addToken');

  tokens.value = [
    ...tokens.value,
    {
      address: '0xfEe25D046909B450DeD5dBc7e1Dc781c8b026f0a',
      symbol: 'ABC',
      instance: null,
    },
  ];
};
const removeToken = (token: TokenData) => {};

const addressInput = shallowRef('');
const addAddress = () => {
  //
};
const removeAddress = (address: string) => {};

export const useBalanceTable = () => {
  return {
    addresses,
    addressInput,
    addAddress,
    removeAddress,

    tokens,
    tokenInput,
    addToken,
    removeToken,
  };
};
