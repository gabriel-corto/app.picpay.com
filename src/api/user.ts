import { api } from "@/config/axios";
import type { ApiResponse } from "@/types/api";
import type { User } from "@/types/schemas";

export async function getProfile() {
  const response = await api.get<ApiResponse<User>>("/users/profile");
  return response.data;
}
