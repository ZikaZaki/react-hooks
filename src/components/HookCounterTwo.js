import React, { useState } from "react"
/* =================================useState=================================
* # Rules of using (useState) Hook:
* 1- It should be used in the component's scope.
* 2- It should be used only once.
* 3- It should be used in functional component only.
------------------------------------------------------------------------------
NOTE: The key difference between (useState) Hook in a functional component and
(this.setState) in class component, is that (useState) will not automatically
merge and update the state and you have to do it manually, whereas (this.setState)
in class component will automatically merge and update the state.
===============================================================================*/
function HookCounterTwo() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={incrementByFive}>Increment By 5</button>
    </div>
  )
}

export default HookCounterTwo
