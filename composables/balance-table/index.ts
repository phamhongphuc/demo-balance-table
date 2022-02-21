import { shallowRef } from 'vue';
import { useErc20 } from './erc20/erc20.hook';
import { Erc20 } from './erc20/erc20.type';

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
const addToken = async () => {
  console.debug('addToken');

  try {
    const address = tokenInput.value;
    const instance = useErc20(address);
    const symbol = await instance.methods.symbol().call();

    tokens.value = [...tokens.value, { address, symbol, instance }];
  } catch (e) {
    //
  }
};
const removeToken = (token: TokenData) => {
  tokens.value = tokens.value.filter((t) => t.address === token.address);
};

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
