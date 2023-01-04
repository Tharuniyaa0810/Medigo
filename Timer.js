import React,{Component} from "react";

class Timer extends React.Component{

    constructor(){
        super();
        this.state={counter:0}
    }
    handleClick=(e)=>{
        this.setState({counter:this.state.counter+1})
    }
    render(){
        return(
            <div>
            <h2>Seconds elapsed:{this.state.counter}</h2>
            <button onClick = {this.handleClick}> Increment Counter </button>
            </div>
        );
    }

}
export default Timer;