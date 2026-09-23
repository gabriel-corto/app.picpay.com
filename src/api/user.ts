import { api } from "@/config/axios";
import type { ApiResponse } from "@/types/api";
import type { Me } from "@/types/schemas";

export async function getProfile() {
  const response = await api.get<ApiResponse<Me>>("/users/profile");
  return response.data;
}
