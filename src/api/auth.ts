import { api } from "@/config/axios";

import type { ApiResponse } from "@/types/api";
import type { LoginBody, RegiterBody } from "@/types/auth";
import type { Me } from "@/types/schemas";

export async function login(body: LoginBody) {
  await new Promise((r) => setTimeout(r, 1000));
  const response = await api.post<ApiResponse>("/auth/login", {
    ...body,
  });

  return response.data;
}

export async function createUser(body: RegiterBody) {
  await new Promise((r) => setTimeout(r, 1000));
  const response = await api.post<ApiResponse<Me>>("/users", {
    ...body,
  });

  return response.data;
}
