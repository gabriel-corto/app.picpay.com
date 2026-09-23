import { RouterProvider } from "react-router";
import { routes } from "./routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/auth";

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          autoClose={1500}
          theme="colored"
          position="bottom-right"
        />
        <RouterProvider router={routes} />;
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
