import React,{Component} from "react";

class IfEx extends Component{
    render(){
        var i=5;
        return(  
              <div>
                   <h1>{i==3?'true':'false'}</h1>
              </div>
        );
    }
}
export default IfEx;