import React,{Component} from "react";

class PropsByClass extends Component{

    render(){
        return(
<div>
        <h2>Hello welcome {this.props.name}</h2>
</div>

        );
    }

}
export default PropsByClass;