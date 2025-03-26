import React from 'react'
import { useState, useEffect } from "react";

export const Counter = () => {

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

  return (
    <div>
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
  )
}
