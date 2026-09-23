import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    date: "12/12/2026",
    payer: "Gabriel Francisco",
    payee: "Pedro Mateus",
    value: "$ 17.000,00",
  },
];
export function TransactionTable() {
  return (
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
          {transactions.map((invoice) => (
            <TableRow key={invoice.date}>
              <TableCell className="font-medium">{invoice.date}</TableCell>
              <TableCell>{invoice.payer}</TableCell>
              <TableCell>{invoice.payee}</TableCell>
              <TableCell className="text-right">{invoice.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
