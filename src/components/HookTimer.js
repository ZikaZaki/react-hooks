import React, { useState, useEffect } from "react"

function HookTimer() {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    // to clear values on unmount, useEffect returns a function
    return () => {
      clearInterval(interval)
    };
  }, [])

  return (
    <div>
      Hook Timer: {timer}
    </div>
  )
}

export default HookTimer
