import type { AccountType } from "./schemas";

export interface LoginBody {
  email: string;
  password: string;
}

export interface RegiterBody {
  name: string;
  email: string;
  cpf: string;
  password: string;
  type: AccountType;
}
