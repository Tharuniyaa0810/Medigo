import React from "react";
import { Component } from "react";

class InMount extends Component{
constructor(props) {
    super(props)

    this.state = {
         name:"sathya"
    }
    console.log("constructor called")
}


    componentDidMount(){
        console.log("component did mount only once after render")
    }
    render(){

        console.log("render called")
        return(
            <div>
            <h2>welcome to lifecycle</h2>
            
            </div>
        )
    } }
    export default InMount;