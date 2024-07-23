import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const Context = createContext();
// export const admin_Context = createContext();
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get("http://localhost:2000/").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);
  return (
    <Context.Provider value={{ user, setUser, ready }}>
      {children}
    </Context.Provider>
  );
}
