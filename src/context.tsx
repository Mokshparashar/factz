import React, { createContext, useState, useContext } from "react";

interface ContextInterface {
  showSidebar: boolean | null;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean | null>>;
  number: number;
}
const AppContext = createContext<ContextInterface | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean | null>(true);

  const contextValue: ContextInterface = {
    showSidebar,
    setShowSidebar,
    number: 1,
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
