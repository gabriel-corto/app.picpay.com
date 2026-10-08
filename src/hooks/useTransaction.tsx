import { getProfile } from "@/api/user";
import type { Transaction } from "@/types/schemas";
import { useQuery } from "@tanstack/react-query";

export function useTransaction(transaction: Transaction) {
  const { data: response } = useQuery({
    queryKey: ["get-profile"],
    queryFn: getProfile,
  });

  const profile = response?.data;
  const isPayer = profile?.id === transaction.payer.id;

  return {
    isPayer,
    color: isPayer ? "text-red-500" : "text-green-500",
    sign: isPayer ? "-" : "+",
  };
}
