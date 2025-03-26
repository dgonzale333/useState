import React, { useState, useEffect } from "react";

 const GenerateColor = () => {
  const [bgColor, setBgColor] = useState(""); // Estado para el color de fondo
  const coloresAbsolutos = ["red", "blue", "green", "yellow", "purple", "orange"];

  const generarColor = () => {
    const colorAleatorio =
      coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setBgColor(colorAleatorio);
    alert(`El color generado es: ${colorAleatorio}`);
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px", minHeight: "100vh" }}>
      {/* Botón para generar color */}
      <button
        onClick={generarColor}
        className="m-2 p-2 bg-blue-500 text-white rounded"
      >
        Generar Color
      </button>
    </div>
  );
};
export default GenerateColor;
