import React, { Component } from "react"

class ClassCounterThree extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: {firstName: '', lastName: ''}
    }
  }

  setName = (e) => {
    this.setState({
      // Wrong ways of updating state
      // 1- // name: {[e.target.name]: e.target.value}
      // 2- // name: {...this.state, [e.target.name]: e.target.value}
      name: {...this.state.name, [e.target.name]: e.target.value}
    })
  }

  render() {
    const { name } = this.state

    return (
      <div>
        <form>
            <input
              type="text"
              name="firstName"
              value={name.firstName}
              onChange={(e) => this.setName(e)}
            />
            <input
              type="text"
              name="lastName"
              value={name.lastName}
              onChange={(e) => this.setName(e)}
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
