import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const Context = createContext();
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get("http://localhost:2000/").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}
