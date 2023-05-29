import React, { useState, useMemo } from "react"
/** ------------------------useMemo()----------------------------------------------------------
 * What?---------------------------------
 * useMemo() is a hook that will only recompute the memoized value when one of the dependencies 
 * has changed. This optimization helps to avoid expensive calculations on every render. 
 * It is similar to useCallback() hook but it is used for functions instead of objects.
 * When?---------------------------------
 * - To memoize a function.
 * - To optimize the performance of the app.
 * - To avoid expensive calculations on every render.
 * - To avoid expensive calculations in a component by caching the result of the function.
 * How?---------------------------------
 * - useMemo() accepts a function and returns the memoized value.
 * - It takes two arguments, a function and a dependency array.
 * - useMemo() will only recompute the memoized value when one of the dependencies has changed.
 * - If there is an empty dependency array, then it will only compute the memoized value once.
 * - If there is no dependency array, then it will recompute the memoized value on every render.
 * ---------------------------------------------------------------------------------------------
 * To learn more about useMemo() hook, visit:
 * Articles:
 * -@see https://www.robinwieruch.de/react-usememo-hook
 * -@see https://kentcdodds.com/blog/usememo-and-usecallback
 * Videos:
 * -@see https://www.youtube.com/watch?v=THL1OPn72vo&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=31
 * -@see https://www.youtube.com/watch?v=4BranN3qnDU
 * -@see https://www.youtube.com/watch?v=J-g9ZJha8FE
 * -@see https://www.youtube.com/watch?v=9KJxaFHotqI
 * ---------------------------------------------------------------------------------------------
 */

function Counter() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while( i < 2000000000) i++
    
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One: {counterOne}</button>
        <span>{isEven ? ' Even' : ' Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two: {counterTwo}</button>
      </div>
    </div>
  )
}

export default Counter
