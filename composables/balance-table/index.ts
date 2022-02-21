import { shallowRef, reactive, watch } from 'vue';
import { useErc20 } from './erc20/erc20.hook';
import { Erc20 } from './erc20/erc20.type';
import { web3 } from './web3/web3';

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

const balanceMap = reactive(new Map<string, string>());
const getBalance = (address: string, token: TokenData) =>
  balanceMap.get(`${address}-${token.address}`);
const setBalance = async (
  address: string,
  token: TokenData,
  value: string | null = null
) => {
  let balance = value || getBalance(address, token);
  if (!balance && token.instance) {
    balance = await token.instance.methods.balanceOf(address).call();
  }
  balanceMap.set(`${address}-${token.address}`, balance);
};

const tokenInput = shallowRef('');
const tokenInputError = shallowRef('');
const addToken = async () => {
  const token = tokenInput.value.toLowerCase();

  if (tokens.value.find((t) => t.address.toLowerCase() === token)) {
    tokenInputError.value = 'This token is already added';
    return;
  }

  try {
    const instance = useErc20(token);
    const symbol = await instance.methods.symbol().call();

    tokens.value = [...tokens.value, { address: token, symbol, instance }];
  } catch (e) {
    tokenInputError.value = 'Invalid token address';
  }
};
const removeToken = (token: TokenData) => {
  tokens.value = tokens.value.filter((t) => t.address !== token.address);
};
watch(tokenInput, () => {
  tokenInputError.value = '';
});

const addressInput = shallowRef('');
const addressInputError = shallowRef('');
const addAddress = async () => {
  const address = addressInput.value.toLowerCase();

  if (addresses.value.find((a) => a.toLowerCase() === address)) {
    addressInputError.value = 'This address is already added';
    return;
  }

  try {
    const balance = await web3.eth.getBalance(address);
    addresses.value = [...addresses.value, address];
  } catch (e) {
    addressInputError.value = 'Invalid wallet address';
  }
};
const removeAddress = (address: string) => {
  addresses.value = addresses.value.filter((a) => a !== address);
};
watch(addressInput, () => {
  addressInputError.value = '';
});

export const useBalanceTable = () => {
  return {
    addresses,
    addressInput,
    addressInputError,
    addAddress,
    removeAddress,

    tokens,
    tokenInput,
    tokenInputError,
    addToken,
    removeToken,

    getBalance,
    setBalance,
  };
};
