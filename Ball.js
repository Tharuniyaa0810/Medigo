import React from "react";

function Ball(){

    const shoot=()=>{
        alert("great shot");
    }

    return(
        <button onClick={shoot}>Tahke the shot</button>
    );
}
export default Ball;