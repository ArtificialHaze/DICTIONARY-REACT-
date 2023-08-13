import React from "react";
import "./App.scss";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Dictionary from "./Dictionary";

const App = () => {
  return (
    <div
      className="app"
      style={{ backgroundColor: "#3aafa9", height: "100vh" }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dictionary" element={<Dictionary />} />
      </Routes>
    </div>
  );
};

export default App;
