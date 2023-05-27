import React, { useContext } from "react"
import { CountContext } from "../App"

function ComponentD() {
  const countContext = useContext(CountContext)

  return (
    <div>
        <h2>Component D</h2>
        <button onClick={() => countContext.countDispatch({type: "INCREMENT", value: 1})}>Increment</button>
        <button onClick={() => countContext.countDispatch({type: "DECREMENT", value: 1})}>Decrement</button>
        <button onClick={() => countContext.countDispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}

export default ComponentD
