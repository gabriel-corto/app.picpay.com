import { api } from "@/config/axios";
import type { ApiResponse } from "@/types/api";
import type { WalletDepositBody, WalletResponse } from "@/types/schemas";

export async function deposit(payload: WalletDepositBody) {
  const response = await api.post<ApiResponse<WalletResponse>>(
    "/wallet/deposit",
    {
      ...payload,
    },
  );

  return response.data;
}

export async function getBalance() {
  const response =
    await api.get<ApiResponse<WalletResponse>>("/wallet/balance");

  return response.data;
}
