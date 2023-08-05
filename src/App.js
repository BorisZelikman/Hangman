import logo from "./logo.svg";
import "./App.css";
import Score from "./components/Score";
import Letters from "./components/Letters";
import GuessWord from "./components/GuessWord";
import Question from "./components/Question";
import { useState } from "react";

function App() {
  const data = [
    { word: "winter", question: "the cold season between autumn and spring" },
    {
      word: "apple",
      question:
        "the usually round, red or yellow, edible fruit of a small tree",
    },
  ];

  const [currentValues, setCurrentValues] = useState({
    score: 100,
    wordIndex: 0,
    currentWord: data[0],
    checkedLetters: [],
  });

  const isCorrect = (letter) =>
    currentValues.currentWord.word
      .toUpperCase()
      .split("")
      .some((l) => l === letter);

  const addLetter = (letter) => {
    let newValue = { ...currentValues };
    newValue.checkedLetters.push(letter);
    newValue.score -= isCorrect(letter) ? 0 : 20;
    setCurrentValues(newValue);
  };

  return (
    <>
      <Score value={currentValues.score} />
      <GuessWord
        word={currentValues.currentWord.word}
        checked={currentValues.checkedLetters}
      />
      <Question text={currentValues.currentWord.question} />
      <Letters onCheck={addLetter} checked={currentValues.checkedLetters} />
    </>
  );
}

export default App;
