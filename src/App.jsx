import { useState, useEffect } from "react";
import DarkMode from "./assets/components/DarkMode";
import LikeDisLike from "./assets/components/LikeDisLike";
import GenerateColor from "./assets/components/GenerateColor";
import { Counter } from "./assets/components/Counter";
import "./App.css";



export default function App() {
  
  return (
    <div>
    <DarkMode />
    <LikeDisLike />
    <GenerateColor />
    <Counter />
    </div>
  );
}