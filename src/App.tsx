import { useState } from "react";
import "../src/App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
