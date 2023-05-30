import React, { useState, useEffect, useRef } from "react"
/**
 * ------------------------------------------------useRef Hook---------------------------------------------
 * useRef Hook allows you to create a mutable object that persists for the lifetime of the component
 * useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue)
 * The returned object will persist for the full lifetime of the component.
 * useRef() is like a generic “box/container” that can hold a mutable value in its .current property.
 * useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable 
 * value around similar to how you’d use instance fields in classes. This works because useRef() creates a plain 
 * JavaScript object. The only difference between useRef() and creating a {current: ...} object yourself is that 
 * useRef will give you the same ref object on every render. One use case for useRef is to manage focus, text selection, 
 * or media playback, because you can store a reference to a DOM node or React element in a ref. 
 * Moreover,useRef is used for managing form data, where the mutable ref object can be used to store the form’s data between
 * renders without triggering a rerender on its own. Another simple use case is clearing timeouts and intervals from
 * useEffect() hook via event handlers.
 * @see https://reactjs.org/docs/hooks-reference.html#useref)
 * ---------------------------------------------------------------------------------------------------------
 */

function HookTimer() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    // to clear values on unmount, useEffect returns a function
    return () => {
      clearInterval(intervalRef.current)
    };
  }, [])

  return (
    <div>
      Hook Timer: {timer}
      <br />
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>
  )
}

export default HookTimer
