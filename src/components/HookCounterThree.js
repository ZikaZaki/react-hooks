import React, { useState } from "react"

function HookCounterThree() {
  const [name, setName] = useState({firstName: '', lastName: ''})

  return (
    <div>
        <form>
            <input type="text" />
            <input type="text" />
        </form>
    </div>
  )
}

export default HookCounterThree
