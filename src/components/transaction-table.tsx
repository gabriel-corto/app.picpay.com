import { getTransactions } from "@/api/wallet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTransaction } from "@/hooks/useTransaction";
import type { Transaction } from "@/types/schemas";
import { currencyFormatter, dateFormatter } from "@/utils/formatter";
import { useQuery } from "@tanstack/react-query";

function TransactionRow({ transaction }: { transaction: Transaction }) {
  const { color, sign } = useTransaction(transaction);

  return (
    <TableRow className="py-5">
      <TableCell className="font-medium">
        {dateFormatter.format(new Date(transaction.createdAt))}
      </TableCell>
      <TableCell>{transaction.payer.name}</TableCell>
      <TableCell>{transaction.payee.name}</TableCell>
      <TableCell className={`text-right ${color}`}>
        {sign} {currencyFormatter.format(transaction.value)}
      </TableCell>
    </TableRow>
  );
}

export function TransactionTable() {
  const { data: response } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  return (
    <div>
      <div className="border border-zinc-200 p-4 mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-50">Data</TableHead>
              <TableHead>Pagador</TableHead>
              <TableHead>Destinatário</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {response?.data?.map((transaction) => (
              <TransactionRow
                key={transaction.createdAt + transaction.value}
                transaction={transaction}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
