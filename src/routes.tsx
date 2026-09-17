import { createBrowserRouter } from "react-router";
import { AuthLayout } from "./layouts/auth";
import { LoginPage } from "./pages/auth/login";
import { RegisterPage } from "./pages/auth/register";

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
]);
