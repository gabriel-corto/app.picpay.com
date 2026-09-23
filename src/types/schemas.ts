export type AccountType = "SHOPKEEPER" | "COMMON";

export interface Me {
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

export interface WalletResponse {
  balance: number;
}
