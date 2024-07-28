import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const Admin = createContext();
// export const admin_Context = createContext();
export function AdminContextProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!admin) {
      axios.get("http://localhost:2000/admin/").then(({ data }) => {
        setAdmin(data);
        setReady(true);
      });
    }
  }, []);
  return (
    <Admin.Provider value={{ admin, setAdmin, ready }}>
      {children}
    </Admin.Provider>
  );
}
