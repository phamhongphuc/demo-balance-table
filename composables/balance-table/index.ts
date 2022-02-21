import {
  tokens,
  tokenInput,
  tokenInputError,
  addToken,
  removeToken,
} from './token';
import {
  addresses,
  addressInput,
  addressInputError,
  addAddress,
  removeAddress,
} from './address';
import { getBalance, setBalance } from './balance';
import { watch } from 'vue';

watch([addresses, tokens], () => {
  addresses.value.forEach((address) => {
    tokens.value.forEach((token) => {
      setBalance(address, token);
    });
  });
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
