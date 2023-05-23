import React, { Component } from "react"
/* ====================================================================
NOTE: When new state value depend on the state previous value, we pass 
an arrow function that receives prevState as a its parameter, and then
update the state value based on the passed prevState value.
*/
class ClassCounterTwo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
        return {
            count: prevState.count + 1
        }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count: {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounterTwo
