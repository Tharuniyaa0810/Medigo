import React from "react";
import { Component } from "react";

class FirstMount extends Component{

constructor(props){
    super(props)
    this.state={name:'sathya'}
    console.log("constructor called")
}
componentDidMount() {  
    console.log('Component Did MOUNT!')  
 } 
 render(){
    return(
        console.log("i am render")
    )
 }

}
export default FirstMount;
odv-vjoj-pjs