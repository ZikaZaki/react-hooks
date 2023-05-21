import React, { useState } from "react"
/*=================================useState=================================
# Rules of using (useState) Hook:
1- It should be used in the component's scope.
2- It should be used only once.
3- It should be used in functional component only.
------------------------------------------------------------------------------
NOTE: The key difference between (useState) Hook in a functional component and
(this.setState) in class component, is that (useState) will not automatically
merge and update the state and you have to do it manually, whereas (this.setState)
in class component will automatically merge and update the state.
===============================================================================*/

function HookCounterThree() {
  const [name, setName] = useState({firstName: '', lastName: ''})

  return (
    <div>
        <form>
            <input
              type="text"
              value={name.firstName}
              onChange={(e) => setName({ ...name, firstName: e.target.value })}
            />
            <input
              type="text"
              value={name.lastName}
              onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
            <h2>Your first name is: {name.firstName}</h2>
            <h2>Your last name is: {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
  )
}

export default HookCounterThree
