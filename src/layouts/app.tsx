import { Header } from "@/components/header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="max-w-5xl m-auto w-full pt-4">
      <Header />

      <div className="py-10">
        <Outlet />
      </div>
    </div>
  );
}
