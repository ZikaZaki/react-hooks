import React, { Component } from "react"

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }


  render() {
    return (
      <div>IntervalClassCounter</div>
    )
  }
}

export default IntervalClassCounter
