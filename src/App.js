import logo from "./logo.svg";
import "./App.css";
import Score from "./components/Score";
import Letters from "./components/Letters";

function App() {
  return (
    <>
      <Score value="100" />
      <Letters />
    </>
  );
}

export default App;
