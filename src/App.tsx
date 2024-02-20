import { useCallback, useEffect, useState } from "react";
import "../src/App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { apiConfig } from "./config/apiConfig";
import globalInstance from "../api/globalInstance";
import Articles from "./components/Articles";
import { DataInterface } from "../typings";

function App() {
  const [fetchedData, setFetchedData] = useState<DataInterface | undefined>();

  const getHomeData = useCallback(async () => {
    try {
      const response = await fetch(
        `${globalInstance.url}everything?q=india&apiKey=${apiConfig.apiKey}`
      );
      const jsonData = await response.json();
      setFetchedData(jsonData);
    } catch (error) {
      console.error("Error fetching home data:", error);
    }
  }, [setFetchedData]);

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <div className="app">
      <Navbar />

      <Sidebar />
      <Articles data={fetchedData} />
    </div>
  );
}

export default App;
