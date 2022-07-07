import React, { createContext, useState } from "react";

export const LoadingContext = createContext({});

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(Boolean);
  
  return (
    <LoadingContext.Provider value={{
      loading,
      setLoading
    }}>
      {children}
    </LoadingContext.Provider>
  )
}

