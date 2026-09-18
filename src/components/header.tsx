import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowDataTransferHorizontalIcon,
  Dollar,
  Home07Icon,
  Logout04Icon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { Link } from "react-router";

import picpayLogo from "@/assets/images/logo.png";
import { HugeiconsIcon } from "@hugeicons/react";

export function Header() {
  return (
    <header className="mx-auto w-full max-w-7xl rounded-md flex items-center justify-between gap-x-7  px-5 border border-zinc-200  py-4">
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
          className="rounded-md  text-zinc-600 font-light flex w-fit gap-x-2 text-sm items-center"
        >
          <HugeiconsIcon icon={Wallet01Icon} />
          <span>Carteira</span>
        </Link>

        <Link
          to=""
          className="rounded-md  text-zinc-600 font-light flex w-fit gap-x-2 text-sm items-center"
        >
          <HugeiconsIcon icon={ArrowDataTransferHorizontalIcon} />
          <span>Transações</span>
        </Link>
      </nav>

      <div className="flex items-center gap-x-5">
        <div className="rounded-md bg-zinc-100 px-4 flex items-center gap-x-1 py-1.5 text-zinc-700 text-sm">
          <HugeiconsIcon icon={Dollar} size={18} />
          <span>AOA 19.000,00</span>
        </div>

        <Link
          to=""
          className="rounded-md  text-red-600 font-light flex w-fit gap-x-2 text-sm items-center"
        >
          <HugeiconsIcon icon={Logout04Icon} />
          <span>Sair</span>
        </Link>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
