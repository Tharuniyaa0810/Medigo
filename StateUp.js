import React,{Component} from "react";

class StateUp extends React.Component{

    constructor(){
        super();
        this.state={
            quantiy:0,
            price:0
        }
    }

    update=()=>{
        this.setState(
            {quantiy:5},()=>{if(this.state.quantiy==5){this.setState({price:2000-100})}}
        );
    }
render(){
    return(
        <div>
            <h1>{this.state.quantiy}</h1>
            <h1>{this.state.price}</h1>
<button onClick={this.update}>Update</button>
        </div>
    );
}

}
export default StateUp;