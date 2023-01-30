import "./App.css";
import React, { useState, useContext } from "react";
import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import Final from "./Components/Final";
import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1> Kelly Quiz </h1>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "final" && <Final />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
