import { useCallback, useEffect, useState } from "react";
import "../src/App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Articles from "./components/Articles";
import { DataInterface } from "../typings";
import LoadingSpinner from "./components/Loader";

function App() {
  const [fetchedData, setFetchedData] = useState<DataInterface | undefined>();
  const [isLoader, setIsLoader] = useState<boolean>();

  const getHomeData = useCallback(async () => {
    setIsLoader(true)
    try {
      const response = await fetch(
        "https://jsbackend-k2xi.onrender.com/api/adarsh"
      );
      const jsonData = await response.json();
      setFetchedData(jsonData);
    } catch (error) {
      console.error("Error fetching home data:", error);
    }
    setIsLoader(false);
  }, [setFetchedData]);

  useEffect(() => {
    
    getHomeData();
    
  }, []);

  return (
    <div className="app">
      <Navbar />

      <Sidebar />
      {isLoader ? <LoadingSpinner /> : <Articles data={fetchedData} />}
    </div>
  );
}

export default App;
