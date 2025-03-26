import React from 'react'
import { useState, useEffect } from "react";
import "./DarkMode.css";

 const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [bgColor, setBgColor] = useState("#FFFFFF");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        backgroundColor: darkMode ? "#000000" : "#FFFFFF",
        transition: "background-color 0.5s, color 0.5s",
        height: "100vh",
        width: "100vw",
        color: darkMode ? "#FFFFFF" : "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>React</h1>

      {/* Interruptor de Dark Mode */}
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );    
}
export default DarkMode;
