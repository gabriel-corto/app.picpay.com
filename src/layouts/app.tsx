import { Header } from "@/components/header";
import { AuthContext } from "@/context/auth";
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export function AppLayout() {
  const { getToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate("/login", {
        replace: true,
      });
    }
  }, [getToken, navigate]);

  return (
    <div className="max-w-5xl m-auto w-full pt-4">
      <Header />

      <div className="py-10">
        <Outlet />
      </div>
    </div>
  );
}
