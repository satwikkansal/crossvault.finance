import { EthereumAddress } from '@types';
import { Token } from './Token';

export type VaultType = 'VAULT_V1' | 'VAULT_V2';

export interface VaultData extends VaultDynamicData {
  address: EthereumAddress;
  name: string;
  version: string;
  typeId: VaultType;
  token: EthereumAddress;
  symbol: string;
}

export interface UserVaultData {
  address: EthereumAddress;
  depositedBalance: string;
  depositedBalanceUsdc: string;
  allowancesMap: { [spenderAddress: string]: string };
}

export interface Vault {
  address: EthereumAddress;
  name: string;
  vaultBalance: string;
  vaultBalanceUsdc: string;
  depositLimit: string;
  apyData: any;
  userDeposited: string;
  userDepositedUsdc: string;
  allowancesMap: { [vaultAddress: string]: string };
  approved: boolean;
  token: Token;
}

export interface VaultDynamicData {
  address: EthereumAddress;
  balance: string;
  balanceUsdc: string;
  apyData: any;
  depositLimit: string;
  pricePerShare: string;
  migrationAvailable: boolean;
  latestVaultAddress: string;
  emergencyShutdown: boolean;
}
