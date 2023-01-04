import React from "react";

function Greet(props){
    console.log(props);
    return(
        <div>
<h1>Hello welcome {props.name}  hmm {props.heroName}</h1>
     {props.children}  
     </div>
    )
    
}
export default Greet;