import React from "react";

function Match(){

    const bowl= (speed) =>{
            alert(speed);
    }

    return <button onClick={() =>bowl("got a wicket")}>TAKE THE SHOT</button>
}

export default Match;