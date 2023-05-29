import React, { useEffect, useRef } from "react"
/**
 * useRef Hook is used to access DOM nodes or HTML elements.
 * useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
 * The returned object will persist for the full lifetime of the component.
 * 
 */

function FocusInput() {
  const inputRef = useRef(null)

  useEffect(() => {
    // focus the input element
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput
