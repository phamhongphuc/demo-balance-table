import BigNumber from 'bignumber.js';
import { shallowRef, watch } from 'vue';
import { setBalance } from './balance';
import { baseToken } from './token';
import { web3 } from './web3/web3';

export const addresses = shallowRef([]);

export const addressInput = shallowRef('');
export const addressInputError = shallowRef('');
export const addAddress = async () => {
  const address = addressInput.value.toLowerCase();

  if (addresses.value.find((a) => a.toLowerCase() === address)) {
    addressInputError.value = 'This address is already added';
    return;
  }

  try {
    const balance = new BigNumber(await web3.eth.getBalance(address))
      .shiftedBy(-baseToken.decimals)
      .decimalPlaces(4)
      .toFormat();
    setBalance(address, baseToken, balance);

    addresses.value = [...addresses.value, address];
    addressInput.value = '';
  } catch (e) {
    addressInputError.value = 'Invalid wallet address';
  }
};
export const removeAddress = (address: string) => {
  addresses.value = addresses.value.filter((a) => a !== address);
};
watch(addressInput, () => {
  addressInputError.value = '';
});
