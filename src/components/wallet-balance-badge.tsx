import { getBalance } from "@/api/wallet";
import { currencyFormatter } from "@/utils/formatter";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";

export function WalletBalanceBadge() {
  const { data: response, isLoading } = useQuery({
    queryKey: ["wallet-balance"],
    queryFn: getBalance,
  });

  return isLoading ? (
    <Skeleton className="w-32 h-8" />
  ) : (
    <div className="rounded-md bg-zinc-100 px-4 flex items-center gap-x-1 py-1.5 text-zinc-700 text-sm">
      <span>{currencyFormatter.format(response?.data?.balance || 0)}</span>
    </div>
  );
}
