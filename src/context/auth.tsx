import { createContext, useState, type ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  storageToken: (value: string) => void;
  logout: () => void;
  getToken: () => string | null;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({} as AuthContextType);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [token, setToken] = useState<string | null>("");

  const storageToken = async (value: string) => {
    setToken(value);
    localStorage.setItem("app.picpay.com", JSON.stringify(value));
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("app.picpay.com");
  };

  const getToken = () => {
    const token = localStorage.getItem("app.picpay.com");
    setToken(token);

    return token;
  };

  return (
    <AuthContext.Provider value={{ token, storageToken, logout, getToken }}>
      {props.children}
    </AuthContext.Provider>
  );
}
