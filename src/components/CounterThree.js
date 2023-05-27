import React, { useReducer } from "react"

const initialState = 0
const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + action.value
    case "DECREMENT":
      return state - action.value
    case "RESET":
      return initialState
    default:
      return state
  }
}

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
        <div>
            <h2>Count One: {count}</h2>
            <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
        <br />
        <div>
            <h2>Count Two: {countTwo}</h2>
            <button onClick={() => dispatchTwo({ type: "INCREMENT", value: 1 })}>Increment</button>
            <button onClick={() => dispatchTwo({ type: "DECREMENT", value: 1 })}>Decrement</button>
            <button onClick={() => dispatchTwo({ type: "RESET" })}>Reset</button>
        </div>
    </div>
  )
}

export default CounterThree
