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
    wordIndex: 1,
    currentWord: data[0],
    checkedLetters: [],
  });

  const isCorrect = (letter) =>
    currentValues.currentWord.word
      .toUpperCase()
      .split("")
      .some((l) => l === letter);

  const addLetter = (letter) => {
    if (currentValues.score > 0 && !isDone()) {
      let newValue = { ...currentValues };
      newValue.checkedLetters.push(letter);
      newValue.score -= isCorrect(letter) ? 0 : 20;
      setCurrentValues(newValue);
    }
    if (isDone()) alert("DONE");
  };

  const isDone = () => {
    const wordChars = currentValues.currentWord.word.toUpperCase().split("");
    const checkedChars = currentValues.checkedLetters;
    return wordChars.every((c) => checkedChars.indexOf(c) >= 0);
  };
  return (
    <div className="App">
      <Score value={currentValues.score} />
      <GuessWord
        word={currentValues.currentWord.word}
        checked={currentValues.checkedLetters}
      />
      <Question text={currentValues.currentWord.question} />
      <Letters onCheck={addLetter} checked={currentValues.checkedLetters} />
    </div>
  );
}

export default App;
