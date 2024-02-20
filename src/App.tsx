import { useCallback, useEffect, useState } from "react";
import "../src/App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAppContext } from "./context";
import { apiConfig } from "./config/apiConfig";
import globalInstance from "../api/globalInstance";
import Articles from "./components/Articles";

function App() {
  const { setFetchedData, fetchedData } = useAppContext();

  const getHomeData = useCallback(async () => {
    try {
      const response = await fetch(
        `${globalInstance.url}everything?q=india&apiKey=${apiConfig.apiKey}`
      );
      const jsonData = await response.json();
      setFetchedData(jsonData);
    } catch (error) {
      // Handle errors if needed
      console.error("Error fetching home data:", error);
    }
  }, [setFetchedData]);

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Header />
      <Sidebar />
      <Articles data={fetchedData} />
    </div>
  );
}

export default App;
