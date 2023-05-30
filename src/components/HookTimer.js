import React, { useState, useEffect, useRef } from "react"

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
