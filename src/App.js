import React, { useReducer } from "react";
import './App.css';
// import ClassCounter from "./components/ClassCounter";
// import ClassCounterThree from "./components/ClassCounterThree";
// import ClassCounterTwo from "./components/ClassCounterTwo";
// import ClassMouse from "./components/ClassMouse";
// import ComponentC from "./components/ComponentC";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import ParentComponent from "./components/Employee/ParentComponent";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + action.value
//     case 'DECREMENT':
//       return state - action.value
//     case 'RESET':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
    {/* ========================CLASS COMPONENTS======================== */}
      {/* <ClassCounter /> */}
      {/* <ClassCounterTwo /> */}
      {/* <ClassCounterThree /> */}
      {/* <ClassMouse /> */}
      {/* <IntervalClassCounter /> */}
    {/* ======================FUNCTIONAL COMPONENTS====================== */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={'ZikaZaki'}>
        <ChannelContext.Provider value={'Gaming'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <h2>Count: {count}</h2>
        <br />
        <ComponentA />
        <br />
        <ComponentB />
        <br />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      <FocusInput />
    </div>
  );
}

export default App;
