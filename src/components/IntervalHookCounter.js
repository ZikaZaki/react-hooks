import React, { useState, useEffect } from "react"

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
  /* 
    *CAREFUL:
     Updating the count value using prevCount variable is
     wrong in this case, because the count value will keep updating
     ignoring the dependency array. And that's because of the prevCount
     variable which is not a dependency. Therefore, the count value will keep
     updating even if the dependency array is empty. So, to fix this issue,
     we have to remove the prevCount variable and use the count variable
     instead.
    *WRONG!!! >>> setCount(prevCount => prevCount + 1)
    *CORRECT >>> setCount(count + 1)
    =================================================================================
    In this component, the useEffect hook is called with an empty dependency array, [].
    This means that the effect will only run once when the component mounts, and the 
    interval will be set up to call the tick function every second. Even though the 
    count state is not listed as a dependency in the useEffect dependency array, the 
    tick function still has access to the current value of count through the closure 
    created by the useState hook. So, when tick is called inside the setInterval function, 
    it will update the count state by incrementing the previous count value by one using 
    the setCount function. This means that even though count is not listed as a dependency
    in the useEffect dependency array, it will still be updated every second because the 
    tick function has access to the current count value through the closure created by 
    the useState hook. In general, it is a good practice to list all the dependencies 
    that the effect depends on in the dependency array, to ensure that the effect runs only 
    when one of the dependencies changes.
    =================================================================================
    In programming, a closure is a function that has access to variables in its lexical scope, 
    even after the outer function has returned. In other words, a closure is created when
    a function is defined inside another function and the inner function has access to
    the outer function's variables and parameters. This allows the inner function to 
    "remember" the environment it was created in and access those variables and parameters 
    even after the outer function has finished executing. Closures are often used to create
    private variables and functions in JavaScript and other programming languages. 
    They can also be used to create higher-order functions, which are functions that 
    take other functions as arguments or return functions as values.
  */
    setCount(count + 1)
  }

  /*
  *QUOTE: by Dan Abramov.
   ----------------------
   "The problem here is our mental model of how the useEffect Hook works.
   if you think dependency array is a way to specify when you want to rerun
   the effect, you're going to run into problems. Instead, think of it as a way
   to let React know about everything (all values) that the effect must watch
   for changes. This is important because it allows React to ensure that the
    effect is recreated if any of the values change. If you don't specify any
    values, React assumes that your effect doesn't depend on any values from
    props or state, so it never needs to re-run it. This is why it's safe to
    omit the dependency array in the first place. But if you do specify values,
    React will assume that your effect depends on them, and if any of them
    changes, it will re-run the effect. This is why you need to specify all
    values that the effect depends on. If you forget to do this, you'll run
    into problems. This is why I recommend to always specify all values that
    the effect depends on, even if you think they are "static" values that will
    never change."
  */

  /* 
    *NOTE: 
     Whenever there's an empty dependency array, [] please make sure of the followings:
     1- You are not using any state or props inside the useEffect hook.
     2- You are not using any props or state inside the callback function of the useEffect hook.
    ============================================================================================
    *NOTE: 
     Whenever there's a need to call a function inside useEffect, make sure you define it
     inside the useEffect hook and not outside it. And that's because of the dependency array.
  */      

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    // Cleanup function
    return () => {
        clearInterval(interval)
    }
  }, [count])

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default IntervalHookCounter
