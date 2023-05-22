import React, { Component } from "react"

class ClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       name: ''
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`
  }

  incrementCount = () => {
    this.setState({
        count: this.state.count + 1
    })
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    const { count, name } = this.state

    return (
      <div>
        <input type="text" value={name} onChange={e => this.handleNameChange(e)} />
        <button onClick={this.incrementCount}>Count: {count}</button>
      </div>
    )
  }
}

export default ClassCounter
