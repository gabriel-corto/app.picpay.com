import { RouterProvider } from "react-router";
import { routes } from "./routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer autoClose={1500} />
      <RouterProvider router={routes} />;
    </QueryClientProvider>
  );
}
