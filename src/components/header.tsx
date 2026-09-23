import { AccountMenu } from "./account-menu";
import { Navbar } from "./navbar";
import { WalletBalanceBadge } from "./wallet-balance-badge";

export function Header() {
  return (
    <header className="mx-auto w-full max-w-7xl flex items-center justify-between gap-x-7  px-5 border border-zinc-200  py-4">
      <Navbar />

      <div className="flex items-center gap-x-5">
        <WalletBalanceBadge />
        <AccountMenu />
      </div>
    </header>
  );
}
