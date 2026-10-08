export type AccountType = "SHOPKEEPER" | "COMMON";

export interface User {
  id: string;
  name: string;
  cpf: string;
  email: string;
  type: AccountType;
}

export interface LoginBody {
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}

export interface RegiterBody {
  name: string;
  email: string;
  cpf: string;
  password: string;
  type: AccountType;
}

export interface WalletDepositBody {
  value: number;
}
export interface WalletTransferBody {
  payee: string;
  amount: number;
}

export interface WalletResponse {
  balance: number;
}

export interface Transaction {
  payer: User;
  payee: User;
  value: number;
  createdAt: string;
}
