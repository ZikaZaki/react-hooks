import './App.css';
import ClassCounter from "./components/ClassCounter";
import ClassCounterTwo from "./components/ClassCounterTwo";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      <ClassCounterTwo />
      {/* <HookCounter /> */}
      <HookCounterTwo />
    </div>
  );
}

export default App;
