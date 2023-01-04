import React from "react";
import { useState } from "react";
import { useAge } from "react";



function UseStateEx2(){

 const [state, setstate] = useState("divya");
 
 const [age,setAge]=useState(67);


 const handleChange=()=>{
    setstate("prakash")
    setAge(34)
 }

 return(
<div>
          {/* by using event method we did */}
     Your Name:<h1>{state}</h1><br/>  
     {/* by using normal setstate we did */}
     Your age is:<h2>{age} </h2> <br/> <br/>
<button onClick={handleChange}>clickName</button>
     {/* <button onClick={()=>setAge(89)}>Clickage</button> */}
</div>

 );

}
export default UseStateEx2;