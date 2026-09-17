import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowDataTransferHorizontalIcon,
  Home09FreeIcons,
  Logout04Icon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, Outlet } from "react-router";

import picpayLogo from "@/assets/images/logo.png";

export function AppLayout() {
  return (
    <div className="max-w-5xl m-auto w-full">
      <div className="fixed bottom-6 inset-x-0 z-50 px-6">
        <nav className="mx-auto w-full max-w-5xl flex items-center justify-between gap-x-7   px-5 border border-zinc-200 bg-zinc-100 py-4">
          <div className="flex items-center gap-x-5">
            <div>
              <img src={picpayLogo} alt="" className="w-10 rounded-xl" />
            </div>

            <Link
              to=""
              className="rounded-md  text-zinc-600 font-light flex w-fit gap-x-2 text-sm items-center"
            >
              <HugeiconsIcon icon={Home09FreeIcons} />
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
          </div>

          <div className="flex items-center gap-x-5">
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
        </nav>
      </div>

      <div className="py-10">
        <Outlet />
      </div>
    </div>
  );
}
