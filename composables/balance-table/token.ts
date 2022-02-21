import { shallowRef, watch } from 'vue';
import { useErc20 } from './erc20/erc20.hook';
import { Erc20 } from './erc20/erc20.type';

export type TokenData = {
  address: string;
  symbol: string;
  decimals: number;
  instance: Erc20 | null;
};

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const baseToken: TokenData = {
  address: ZERO_ADDRESS,
  symbol: 'BNB',
  decimals: 18,
  instance: null,
};

export const tokens = shallowRef<TokenData[]>([baseToken]);

export const tokenInput = shallowRef('');
export const tokenInputError = shallowRef('');
export const addToken = async () => {
  const token = tokenInput.value.toLowerCase();

  if (tokens.value.find((t) => t.address.toLowerCase() === token)) {
    tokenInputError.value = 'This token is already added';
    return;
  }

  try {
    const instance = useErc20(token);
    const symbol = await instance.methods.symbol().call();
    const decimals = Number(await instance.methods.decimals().call());

    tokens.value = [
      ...tokens.value,
      { address: token, symbol, instance, decimals },
    ];
    tokenInput.value = '';
  } catch (e) {
    tokenInputError.value = 'Invalid token address';
  }
};
export const removeToken = (token: TokenData) => {
  tokens.value = tokens.value.filter((t) => t.address !== token.address);
};
watch(tokenInput, () => {
  tokenInputError.value = '';
});
