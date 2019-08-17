import * as firebase from "firebase/app";
import React, { createContext, useEffect, useState, ReactNode } from "react";

const UserContext = createContext<firebase.User | null>(null);

interface UserProviderProps {
  initialized: boolean;
  children: ReactNode[];
}

export const UserProvider = ({ initialized, children }: UserProviderProps) => {
  const [listening, setListening] = useState<boolean>(false);
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    console.log("provider:", user);
    if (initialized && !listening) {
      firebase.auth().onAuthStateChanged((_user: firebase.User | null) => {
        setUser(_user);
      });

      setListening(true);
    }
  }, [initialized]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext };
