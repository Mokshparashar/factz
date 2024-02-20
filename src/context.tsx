import React, { createContext, useState, useContext } from "react";

interface sourceInterface {
  id: string;
  name: string;
}
interface articlesInterface {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: sourceInterface;
  title: string;
  url: string;
  urlToImage: string;
}
interface dataInterface {
  articles: articlesInterface[];
  status: string;
  totalResults: number;
}

interface ContextInterface {
  showSidebar: boolean | null;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean | null>>;
  fetchedData: dataInterface | undefined;
  setFetchedData: React.Dispatch<
    React.SetStateAction<dataInterface | undefined>
  >;
}
const AppContext = createContext<ContextInterface | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean | null>(false);
  const [fetchedData, setFetchedData] = useState<dataInterface | undefined>();

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
