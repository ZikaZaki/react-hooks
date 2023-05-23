import React, { useState, useEffect } from "react"
/* ============================useEffect Hook===================================
The useEffect hook  lets you perform side effects in functional components.
It is a close replacement for componentDidMount, componentDidUpdate, and
componentWillUnmount.
--------------------------------------------------------------------------------
* # Rules of using useEffect Hook:
* 1- It should be used in the component's scope.
* 2- It should be used only once.
* 3- It should be used in functional component only.
* 4- It should be used after the state has been updated.
--------------------------------------------------------------------------------
*/
function HookMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  /*
  *NOTE: Make sure to clean up all event listeners and cancel all subscriptions
  *before the component is unmounted to prevent [memory leaks]. To do so, we need
  *to return a function from the useEffect hook. This function will be called when
  *the component is unmounted.
  *Example:------------------------------------------------------------------------
    useEffect(() => {
      /your code here...

      /cleanup code here...
      return () => {
        console.log('useEffect Cleanup')
        window.removeEventListener('mousemove', logMousePosition)
      }
    }, [])
  */
  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('usEffect Cleanup')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse
