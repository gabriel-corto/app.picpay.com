import { api } from "@/config/axios";

import type { ApiResponse } from "@/types/api";
import type {
  LoginBody,
  LoginResponse,
  Me,
  RegiterBody,
} from "@/types/schemas";

export async function login(payload: LoginBody) {
  await new Promise((r) => setTimeout(r, 1000));
  const response = await api.post<ApiResponse<LoginResponse>>("/auth/login", {
    ...payload,
  });

  return response.data;
}

export async function createUser(payload: RegiterBody) {
  await new Promise((r) => setTimeout(r, 1000));
  const response = await api.post<ApiResponse<Me>>("/users", {
    ...payload,
  });

  return response.data;
}
