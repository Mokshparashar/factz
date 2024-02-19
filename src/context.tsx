import React, { createContext, useState, useContext, useEffect } from "react";

interface ContextInterface {
  showSidebar: boolean | null;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean | null>>;
  fetchedData: object | undefined;
  setFetchedData: React.Dispatch<React.SetStateAction<object | undefined>>;
}
const AppContext = createContext<ContextInterface | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean | null>(true);
  const [fetchedData, setFetchedData] = useState<object | undefined>();

  const contextValue: ContextInterface = {
    showSidebar,
    setShowSidebar,
    setFetchedData,
    fetchedData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// Custom hook for using the context values
export const useAppContext = (): ContextInterface => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
