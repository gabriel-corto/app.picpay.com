import { getProfile } from "@/api/user";
import { useAuth } from "@/hooks/useAuth";
import { Logout04Icon, User02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function AccountMenu() {
  const { data: response } = useQuery({
    queryKey: ["get-profile"],
    queryFn: getProfile,
  });

  const { logout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>{response?.data?.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link
            to=""
            className="rounded-md  text-zinc-600 font-light flex w-fit gap-x-2 text-sm items-center"
          >
            <HugeiconsIcon icon={User02Icon} />
            <span>{response?.data?.name}</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            to=""
            onClick={() => logout()}
            className="rounded-md  text-red-600 font-light flex w-fit gap-x-2 text-sm items-center"
          >
            <HugeiconsIcon icon={Logout04Icon} />
            <span>Sair</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
