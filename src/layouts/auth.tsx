import { Outlet } from "react-router";

import picpayLogo from "@/assets/images/logo-xs.png";

export function AuthLayout() {
  return (
    <main className="h-screen flex items-center w-full">
      <div className="h-full flex flex-col items-center justify-center w-[70%] bg-picpay">
        <img src={picpayLogo} alt="" />
      </div>

      <div className="absolute top-5 right-5 rounded-full bg-red-100 text-red-500 px-4 py-2 font-semibold cursor-pointer text-xs border-red-200 border">
        Versão Clonada
      </div>

      <div className="flex items-center justify-center w-full">
        <Outlet />
      </div>
    </main>
  );
}
