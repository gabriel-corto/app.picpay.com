import {
  ArrowDown02Icon,
  ArrowUp02Icon,
  Dollar,
} from "@hugeicons/core-free-icons";

import { PageContainer } from "@/components/page-container";
import { SummaryCard } from "@/components/summary-card";
import { TransactionTable } from "@/components/transaction-table";

export function DashboardPage() {
  return (
    <PageContainer title="Dashboard" subtitle="Acompanhe os seus pagamentos">
      <div className="mt-10 flex items-center gap-x-6">
        <SummaryCard
          value="$ 17"
          theme="neutral"
          title="Entrada"
          icon={ArrowUp02Icon}
        />

        <SummaryCard
          value="$ 20"
          theme="neutral"
          title="Saída"
          icon={ArrowDown02Icon}
        />

        <SummaryCard value="$ 34" theme="neutral" title="Saldo" icon={Dollar} />
      </div>

      <div className="mt-10">
        <h3 className="font-medium text-zinc-600">Últimas Transações</h3>
        <TransactionTable />
      </div>
    </PageContainer>
  );
}
