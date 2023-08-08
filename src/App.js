import "./App.css";
import Score from "./components/Score";
import Letters from "./components/Letters";
import Solution from "./components/Solution";
import { useState } from "react";
import EndGame from "./components/EndGame";

function App() {
  const generateLetterStatus = () => {
    let letterStatus = {};
    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++)
      letterStatus[String.fromCharCode(i)] = false;
    return letterStatus;
  };

  const [letterStatus, setLetterStatus] = useState(generateLetterStatus());
  const [solution, setSolution] = useState({
    word: "apple",
    hint: "the usually round, red or yellow, edible fruit of a small tree",
  });
  const [score, setScore] = useState(100);

  let disabledSelectingLetters = false;
  const selectLetter = (char) => {
    if (disabledSelectingLetters) return;
    setLetterStatus({ ...letterStatus, [char]: true });
    const deltaScore = () =>
      solution.word.toUpperCase().indexOf(char) === -1 ? -20 : 5;
    setScore(score + deltaScore());
  };

  const isFinished = () => {
    const wordChars = solution.word.toUpperCase().split("");
    const checkedChars = Object.keys(letterStatus).filter(
      (c) => letterStatus[c] === true
    );
    const win = wordChars.every((c) => checkedChars.indexOf(c) >= 0);
    const fail = score <= 0;
    disabledSelectingLetters = win || fail;
    return {
      result: win ? "win" : fail ? "fail" : "in progress",
      word: solution.word,
    };
  };
  return (
    <div className="App">
      <Score value={score} />
      <Solution solution={solution} letterStatus={letterStatus}></Solution>
      <Letters letterStatus={letterStatus} selectLetter={selectLetter} />
      <EndGame finishedResult={isFinished()} />
    </div>
  );
}

export default App;
