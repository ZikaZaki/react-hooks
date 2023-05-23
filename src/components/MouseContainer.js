import React, { useState, useEffect } from "react"
import HookMouse from "./HookMouse"
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
function MouseContainer() {
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer
