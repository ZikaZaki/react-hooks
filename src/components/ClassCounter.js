import React, { Component } from "react"
/* ====================================Lifecycle Methods====================================
 * componentDidMount(): Called when the component is mounted. It's called only once.
 * componentDidUpdate(): Called when the component is updated. It's called after every render.
 * componentWillUnmount(): Called just before the component is unmounted and destroyed.
 * shouldComponentUpdate(): Called before the component is updated. It's called before render.
 * ------------------------------------------------------------------------------------------
 * Best Practices of using Lifecycle Methods:
 * 1- It's not recommended to use this.setState in a constructor.
 * 2- It's not recommended to use this.setState in a render method.
 * 3- It's not recommended to use this.setState in a componentWillMount method.
 * 4- It's not recommended to use this.setState in a componentDidMount method.
 * 5- It's not recommended to use this.setState in a componentWillUpdate method.
 * 6- It's not recommended to use this.setState in a shouldComponentUpdate method.
 * 7- It's not recommended to use this.setState in a componentDidUpdate method.
 * 8- It's not recommended to use this.setState in a componentWillUnmount method.
 * 9- It's not recommended to use this.setState in a componentWillReceiveProps method.
 * ------------------------------------------------------------------------------------------
 * ==========================================================================================
 */

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
    if (prevState.count !== this.state.count) {
      console.log('Updating the document title')
      document.title = `Clicked ${this.state.count} times`
    }
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
