import React from "react";

function Test(){
    var marks=[12,48,23,96,27]; 
    const updtmarks=marks.map((x)=>{
        return <li >{x}</li>
    });
    return(
            <div>
            <h4>{updtmarks}</h4>    
            </div>
    )
}
export default Test;