// File: src/UserContext.js
import React, { createContext, useState } from 'react';

// Crea il contesto
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stato utente (null se non autenticato)

  // Funzione per eseguire il login
  const login = (username, password) => {
    if (username === 'admin' && password === 'password') { // Simulazione credenziali corrette
      setUser({ username }); // Imposta l'utente
      return true;
    }
    return false; // Login fallito
  };

  // Funzione per eseguire il logout
  const logout = () => {
    setUser(null); // Rimuove l'utente
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
