import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    handleclick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {

    if(this.state.count===3){
        throw new Error('crashed code re write again')
    }
    return (
      <div>
      <h2>count is:{this.state.count}</h2>
<button onClick={this.handleclick}>clicke me</button>
      </div>
    )
  }
}
export default Counter;