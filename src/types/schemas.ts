export interface Me {
  name: string;
  cpf: string;
  email: string;
  type: AccountType;
}

export type AccountType = "SHOPKEEPER" | "COMMON";
