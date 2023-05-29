import React, { useEffect, useRef } from "react"
/**
 * useRef Hook is used to access DOM nodes or HTML elements.
 * useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
 * The returned object will persist for the full lifetime of the component. This means that,
 * unlike React's built-in ref, it won't be garbage collected.
 *
 * @returns {object}
 * @example
 * import React, { useRef } from 'react'
 * 
 * function TextInputWithFocusButton() {
 *  const inputEl = useRef(null)
 * const onButtonClick = () => {
 * inputEl.current.focus()
 * }
 * return (
 * <>
 * <input ref={inputEl} type="text" />
 * <button onClick={onButtonClick}>Focus the input</button>
 * </>
 * )
 * }
 * 
 * export default TextInputWithFocusButton
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
