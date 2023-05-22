import './App.css';
import ClassCounter from "./components/ClassCounter";
import ClassCounterThree from "./components/ClassCounterThree";
import ClassCounterTwo from "./components/ClassCounterTwo";
import ClassMouse from "./components/ClassMouse";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";

function App() {
  return (
    <div className="App">
    {/* ========================CLASS COMPONENTS======================== */}
      {/* <ClassCounter /> */}
      {/* <ClassCounterTwo /> */}
      {/* <ClassCounterThree /> */}
      {/* <ClassMouse /> */}
    {/* ======================FUNCTIONAL COMPONENTS====================== */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      <HookMouse />
    </div>
  );
}

export default App;
