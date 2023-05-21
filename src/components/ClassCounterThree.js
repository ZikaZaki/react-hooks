import React, { Component } from "react"

class ClassCounterThree extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: {firstName: '', lastName: ''}
    }
  }
  render() {
    const { name } = this.state

    return (
      <div>
        <form>
            <input
              type="text"
              value={name.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
            <input
              type="text"
              value={name.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
            <h2>Your first name is: {name.firstName}</h2>
            <h2>Your last name is: {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
    )
  }
}

export default ClassCounterThree
