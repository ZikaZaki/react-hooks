import React, { useState, useEffect } from "react"
/*============================useEffect Hook===================================
The useEffect hook  lets you perform side effects in functional components.
It is a close replacement for componentDidMount, componentDidUpdate, and
componentWillUnmount.
--------------------------------------------------------------------------------
# Rules of using useEffect Hook:
1- It should be used in the component's scope.
2- It should be used only once.
3- It should be used in functional component only.
4- It should be used after the state has been updated.
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

  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)
  }, [])

  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse
