import { api } from "@/config/axios";
import type { ApiResponse } from "@/types/api";
import type {
  Transaction,
  WalletDepositBody,
  WalletResponse,
  WalletTransferBody,
} from "@/types/schemas";

export async function p2p(payload: WalletTransferBody) {
  const response = await api.post<ApiResponse>("/wallet/p2p", {
    ...payload,
  });

  return response.data;
}

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

export async function getTransactions() {
  const response = await api.get<ApiResponse<Transaction[]>>(
    "/wallet/transactions",
  );

  return response.data;
}
