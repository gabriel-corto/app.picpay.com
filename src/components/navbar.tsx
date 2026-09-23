import {
  ArrowDownLeft01Icon,
  ArrowUpRight01Icon,
  Home07Icon,
} from "@hugeicons/core-free-icons";
import { Link } from "react-router";

import picpayLogo from "@/assets/images/logo.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { WalletDepositDialog } from "./wallet-deposit-modal";

export function Navbar() {
  const [walletDepositDialog, setWalletDepositDialog] = useState(false);

  return (
    <>
      <nav className="flex items-center gap-x-5">
        <div>
          <img src={picpayLogo} alt="" className="w-10 rounded-sm" />
        </div>

        <Link
          to=""
          className="rounded-md  text-zinc-600 font-light flex w-fit gap-x-2 text-sm items-center"
        >
          <HugeiconsIcon icon={Home07Icon} />
          <span>Dashboard</span>
        </Link>

        <Link
          to=""
          onClick={() => setWalletDepositDialog(true)}
          className="rounded-md  text-zinc-600 font-light flex w-fit gap-x-2 text-sm items-center"
        >
          <HugeiconsIcon icon={ArrowDownLeft01Icon} />
          <span>Depositar</span>
        </Link>

        <Link
          to=""
          className="rounded-md  text-zinc-600 font-light flex w-fit gap-x-2 text-sm items-center"
        >
          <HugeiconsIcon icon={ArrowUpRight01Icon} />
          <span>Transferir</span>
        </Link>
      </nav>

      <WalletDepositDialog
        open={walletDepositDialog}
        setOpen={setWalletDepositDialog}
      />
    </>
  );
}
