import { useState, useEffect } from "react";
import "./App.css";

const coloresAbsolutos = [
  "#FF0000", // Rojo
  "#00FF00", // Verde
  "#0000FF", // Azul
  "#FFFF00", // Amarillo
  "#FF00FF", // Magenta
  "#00FFFF", // Cian
  "#000000", // Negro
  "#FFFFFF", // Blanco
  "#808080", // Gris
  "#800000", // Marrón oscuro
  "#808000", // Oliva
  "#800080", // Púrpura
  "#008080", // Verde azulado
  "#C0C0C0", // Plata
  "#FFA500", // Naranja
  "#A52A2A", // Marrón
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval;
    if (isCounting) {
      interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setCounter(0);
    }
    return () => clearInterval(interval);
  }, [isCounting]);

  const generarColor = () => {
    const colorAleatorio =
      coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setBgColor(colorAleatorio);
    alert(`El color generado es: ${colorAleatorio}`);
  };

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

      {/* Botones de Like y Dislike */}
      <div>
        <button
          onClick={() => setLikes(likes + 1)}
          className="m-2 p-2 bg-green-500 text-white rounded"
        >
          Like ({likes})
        </button>
        <button
          onClick={() => setDislikes(dislikes + 1)}
          className="m-2 p-2 bg-red-500 text-white rounded"
        >
          Dislike ({dislikes})
        </button>
      </div>

      {/* Botón para generar color */}
      <button
        onClick={generarColor}
        className="m-2 p-2 bg-blue-500 text-white rounded"
      >
        Generar Color
      </button>

      {/* Contador de segundos */}
      <div>
        <h2>Contador: {counter} segundos</h2>
        <button
          onClick={() => setIsCounting(true)}
          className="m-2 p-2 bg-green-500 text-white rounded"
        >
          Iniciar
        </button>
        <button
          onClick={() => setIsCounting(false)}
          className="m-2 p-2 bg-red-500 text-white rounded"
        >
          Parar
        </button>
      </div>
    </div>
  );
}