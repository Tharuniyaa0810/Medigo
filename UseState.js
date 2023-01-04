import React from "react";
import { useState } from "react";

//we need to import useState method thenonly it will allow
function UseStateEx(){

const [name, setName] = useState("sathya");

return(
    <div>
        Your Name is:{name} <br/>
        <button onClick={()=>setName("prakash")}>click me</button>
    </div>
);

}
export default UseStateEx;