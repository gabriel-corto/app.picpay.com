import { PageContainer } from "@/components/page-container";
import { SummaryCard } from "@/components/summary-card";
import {
  ArrowDown02Icon,
  ArrowUp02Icon,
  Dollar,
} from "@hugeicons/core-free-icons";

export function DashboardPage() {
  return (
    <PageContainer title="Dashboard" subtitle="Acompanhe os seus pagamentos">
      <div className="mt-10 flex items-center gap-x-6">
        <SummaryCard
          value=""
          theme="neutral"
          title="Entrada"
          icon={ArrowUp02Icon}
        />

        <SummaryCard
          value=""
          theme="neutral"
          title="Saída"
          icon={ArrowDown02Icon}
        />

        <SummaryCard value="" theme="neutral" title="Saldo" icon={Dollar} />
      </div>

      <div className="mt-10">
        <h3 className="font-medium text-zinc-600">Últimas Transações</h3>

        <div className="rounded-md border border-zinc-200 p-10 mt-6"></div>
      </div>
    </PageContainer>
  );
}
