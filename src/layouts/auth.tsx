import { Outlet } from "react-router";

import picpaySmLogo from "@/assets/images/logo-sm.png";
import picpayLogo from "@/assets/images/logo-xs.png";

export function AuthLayout() {
  return (
    <main className="h-screen flex items-center w-full">
      <div className="h-full flex-col items-center hidden lg:flex justify-center w-[70%] bg-picpay">
        <img src={picpayLogo} alt="" />
      </div>

      <div className="absolute top-5 right-5 rounded-full bg-red-100 text-red-500 px-4 py-2 font-semibold cursor-pointer text-xs border-red-200 border">
        Versão Simplificada
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className=" lg:hidden ">
          <img src={picpaySmLogo} alt="" className="w-48" />
        </div>

        <Outlet />
      </div>
    </main>
  );
}
