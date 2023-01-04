import React,{Component} from "react";

class ExpressionAttri extends Component{
   render(){
    return(
        <div>
            <h2>By using Expression Attributes</h2>
            <h4 className="hello">{56+10}</h4>
        </div>
    );
   }
}
export default ExpressionAttri;