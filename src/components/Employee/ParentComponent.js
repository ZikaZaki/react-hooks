import React, { useState, useCallback } from "react"
import Count from "./Count"
import Button from "./Button"
import Title from "./Title"
/** ------------------------------------useCallback Hook--------------------------------------------
 * What?----------------------------------
 * useCallback is a hook that will return a memoized version of the callback function that only
 * changes if one of the dependencies has changed. And that's accomplished by caching the function
 * instance itself.
 * Why?-----------------------------------
 * It's useful when passing callbacks to **OPTIMIZED** child components that rely on reference equality
 * to prevent unnecessary re-renders.
 * *NOTE:* Optimized here means that the child components are wrapped in React.memo() HOC.
 * How?-----------------------------------
 * 1- Import {useCallback} from "react"
 * 2- Wrap the function that you want to memoize in useCallback hook and pass the dependencies array
 *    as a second argument with the values that the function depends on.
 **   Example:
 **   const incrementAge = useCallback(() => {
 **     setAge(age + 1)
 **   }, [age])
 * 3- Pass the function to the child component as a prop.
 * 4- Wrap the child component in React.memo() HOC.
 * 5- Check the console to see the difference.
 * ---------------------------------------------------------------------------------------------------
 ** CAUTION...!!!
 ** Using useCallback & useMemo hooks excessively can cause performance issues. So, use them
 ** carefully and wisely. The reason why, is that useCallback & useMemo hooks are used to optimize
 ** the rendering of components. But, in the case of useCallback & useMemo hooks, the optimization
 ** is not a semantic guarantee and only will consume more memory and CPU cycles.
 * ----------------------------------------------------------------------------------------------------
 *  To learn more about useCallback hook, visit:
 *  Articles:-------------------------------------------------------
 *   - @see https://reactjs.org/docs/hooks-reference.html#usecallback
 *   - @see https://kentcdodds.com/blog/usememo-and-usecallback
 *   - @see https://dmitripavlutin.com/dont-overuse-react-usecallback/
 *   - @see https://dmitripavlutin.com/react-usecallback-hook/
 *  Videos:----------------------------------------------------------
 *   - @see https://www.youtube.com/watch?v=THL1OPn72vo
 *   - @see https://www.youtube.com/watch?v=dpw9EHDh2bM
 *   - @see https://www.youtube.com/watch?v=6Xwo5mVxDqI
 * ----------------------------------------------------------------------------------------------------
 */

function ParentComponent() {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
