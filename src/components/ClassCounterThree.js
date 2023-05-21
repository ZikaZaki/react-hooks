import React, { Component } from "react"

class ClassCounterThree extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: {firstName: '', lastName: ''},
       fName: '',
       lName: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({
      // Wrong ways of updating the name state, cause it's an "Object"
      // 1- // name: {[e.target.name]: e.target.value}
      // 2- // name: {...this.state, [e.target.name]: e.target.value}
      name: {...this.state.name, [e.target.name]: e.target.value}
    })
  }

  handleFnameChange = (e) => {
    // Will automatically merge and update the state
    this.setState({ fName: e.target.value })
  }

  handleLnameChange = (e) => {
    // Will automatically merge and update the state
    this.setState({ lName: e.target.value })
  }

  render() {
    const { name, fName, lName } = this.state

    return (
      <div>
        <form>
          <div>
            <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                name="firstName"
                value={name.firstName}
                onChange={(e) => this.handleNameChange(e)}
              />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              value={name.lastName}
              onChange={(e) => this.handleNameChange(e)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="fName">F Name: </label>
            <input
              type="text"
              name="fName"
              value={fName}
              onChange={(e) => this.handleFnameChange(e)}
            />
          </div>
          <div>
            <label htmlFor="lName">L Name: </label>
            <input
              type="text"
              name="lName"
              value={lName}
              onChange={(e) => this.handleLnameChange(e)}
            />
          </div>
            <h2>Your first name is: {name.firstName}</h2>
            <h2>Your last name is: {name.lastName}</h2>
            <h2>Your f name is: {fName}</h2>
            <h2>Your l name is: {lName}</h2>
            <h2>{JSON.stringify(this.state)}</h2>
        </form>
    </div>
    )
  }
}

export default ClassCounterThree
