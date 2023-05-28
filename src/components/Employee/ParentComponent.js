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
      {/* We dealing with functions like "handleClick", we always have to consider
        * reference equality, in order to prevent rendering the component again and again
        * we have to use "useCallback" hook */}
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
