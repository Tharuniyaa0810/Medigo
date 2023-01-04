import React,{Component} from "react";

class ExpenceByClass extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                 <div><b>Name of Customer :</b><em>{this.props.name}</em></div>
                 <div><b>Customer Amount :</b><em>{this.props.amount}</em></div>
                 <div><b>Entry Date :</b><em></em>{this.props.cusdate.toString()}</div>
<div><b>Customer Category :</b><em>{this.props.category}</em></div>
            </div>
        );
    }
}
export default ExpenceByClass;
//App.js:====>
// <ExpenceByClass
    
//     name="Divya soma" 
//     amount="90000" 
//     cusdate={new Date("2022-10-12")}
//     category="employee fund"
 
//  ></ExpenceByClass>
