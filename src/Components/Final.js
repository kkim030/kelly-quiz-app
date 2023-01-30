import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";
import { Questions } from "../Helpers/QuestionBank";

function Final() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="final">
      <h1> You're all done! </h1>
      <h3>
        {" "}
        {score} / {Questions.length}
      </h3>
      <button onClick={restartQuiz}> Restart Quiz </button>
    </div>
  );
}

export default Final;
