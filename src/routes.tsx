import { createBrowserRouter } from "react-router";
import { AppLayout } from "./layouts/app";
import { AuthLayout } from "./layouts/auth";
import { LoginPage } from "./pages/auth/login";
import { RegisterPage } from "./pages/auth/register";
import { DashboardPage } from "./pages/dashboard";

export const routes = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
    ],
  },
]);
