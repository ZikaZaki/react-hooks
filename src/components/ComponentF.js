import React, { useContext } from "react"
// import { UserContext, ChannelContext } from "../App"
import { CountContext } from "../App"
/*
*NOTE:
*  We can use the Consumer component to consume the context values.
*  The Consumer component accepts a function as a child.
*  The function is called with the context value as an argument.
*  The return value of the function is what gets rendered.
*  The value prop is passed to the Provider component.
--------------------------------------------------------------------------------
*BEST PRACTICES:
*  Use the Consumer component if you need to consume more than one context in a component.
*  Use the static contextType property if you only need to consume a single context in a component.
*/
function ComponentF() {
  const countContext = useContext(CountContext)

  return (
    // <div>
    //   <UserContext.Consumer>
    //     {
    //         user => {
    //           return (
    //             <ChannelContext.Consumer>
    //               {
    //                 channel => {
    //                   return (
    //                     <div>
    //                       <h2>User context value: {user}</h2>
    //                       <h2>Channel context value: {channel}</h2>
    //                     </div>
    //                   )
    //                 }
    //               }
    //             </ChannelContext.Consumer>
    //           )
    //         }
    //     }
    //   </UserContext.Consumer>
    // </div>
    <div>
      <h4>Component F - Count: {countContext.countState}</h4>
      <button onClick={() => countContext.countDispatch({type: "INCREMENT", value: 1})}>Increment</button>
      <button onClick={() => countContext.countDispatch({type: "DECREMENT", value: 1})}>Decrement</button>
      <button onClick={() => countContext.countDispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}

export default ComponentF
