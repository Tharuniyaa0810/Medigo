import React,{Component} from "react";

class StringAttri extends Component{

    render(){
        return(
            <div>
                <p className="hello">By using String litteral Attribute</p>
                <p data-demoAttribute="demo">by custome attributes</p>
            </div>
        );
    }
}
export default StringAttri;