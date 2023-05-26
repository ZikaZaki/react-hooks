import React, { useReducer } from "react"

const initialState = {
  firstCounter: 0
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return { firstCounter: state.firstCounter + 1 }
    case 'decrement':
      return { firstCounter: state.firstCounter - 1}
    case 'reset':
      return initialState
    default:
      return state
  }
}

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>Count: {count.firstCounter}</div>
      <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo
