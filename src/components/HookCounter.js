import React, { useState, useEffect } from "react"
/*
=============================Rules of Hooks=============================
1- Only call Hooks at the Top Level.
Don't call Hooks inside loops, conditions, or nested functions.
2- Only call Hooks from React Functions.
Call them from within React functional components and not just any 
regular JavaScript function.
========================================================================
*/
function HookCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}

export default HookCounter
