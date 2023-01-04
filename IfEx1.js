import React,{Component} from "react";

class IfEx1 extends Component{
    render(){
        const x=3;        
        let text="good bye";
        if(x<5){
            text="welcome";
        }
//const my=<h2>{text}</h2>
         return(
            <div>
         <h1>{text}</h1>
            </div>
         );
    }
}
export default IfEx1;