import React, { useState } from "react"
/* ===============================Summary - useState=================================
The useState Hook lets you add state to functional components.
In classes, the state is always an Object. With the useState Hook, the state doesn't
have to be an object, it can be an array, a number, a boolean, or even a string.
------------------------------------------------------------------------------------
* NOTE: The useState Hook returns an array with 2 elements:
* 1- The first element is the current value of the state.
* 2- The second element is a state setter function.
In case the (new) state value depends on the (previous) state value, you can pass
a function to the setter function which will receive the previous state value as a
its argument.
------------------------------------------------------------------------------------
* CAREFUL!!!: When dealing with objects or arrays, always make sure to SPREAD your 
* state variable and then call the setter function.
==================================================================================*/

function HookCounterFour() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
        ...items,
        {
            id: items.length + 1,
            value: Math.floor(Math.random() * 10 + 1)
        }
    ])
  }

  console.log("Type of items ", Array.isArray(items))
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default HookCounterFour
