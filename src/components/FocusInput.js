import React, { useEffect, useRef } from "react"

function FocusInput() {
  const inputRef = useRef(null)

  useEffect(() => {
    // focus the input element
  }, [])
  return (
    <div>
      <input type="text" />
    </div>
  )
}

export default FocusInput
