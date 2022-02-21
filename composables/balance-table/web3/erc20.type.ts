import { ContractOptions } from 'web3-eth-contract';
import { NonPayableTransactionObject, BaseContract } from './types';

export interface Erc20 extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Erc20;
  clone(): Erc20;
  methods: {
    name(): NonPayableTransactionObject<string>;

    decimals(): NonPayableTransactionObject<string>;

    balanceOf(_owner: string): NonPayableTransactionObject<string>;

    symbol(): NonPayableTransactionObject<string>;
  };
}
