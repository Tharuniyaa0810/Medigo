import React from "react";
import image  from './background.jpg';
import mylogo from './logonew.png';
//import{Link} from "react-router-dom";
import './App.css';
class Classcomp2 extends React.Component
{
    render()
    {
        const mystyle={
            backgroundImage:`url('${image}')`,
            height:'120vh',
            marginTop:'-20px',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
        };
        return(
            <div style={mystyle}>
            <img src={mylogo} alt="logo" className="omg"/>
            <h1 style={{marginLeft:'15%',color:" #3A8E7A",fontSize:'60px',marginTop:'-70px'}}>MediGo</h1>
            <form className="b">
            <h1 style={{textAlign:"center",marginLeft:'-500px',paddingTop:'60px',fontSize:'50px'}}>CREATE ACCOUNT</h1>
            <input className="cc" type="text" placeholder="Password" style={{marginLeft:'170px',textAlign:"center"}}/><br></br><br></br>
            <input className="cc" type="password" placeholder="Confirm Password" style={{marginLeft:'170px',textAlign:"center"}}/><br></br><br></br><br></br><br></br><br></br>
            <button className="co" style={{background:"blue",color:"white",marginLeft:'60%'}}>Submit</button>
           </form>
            </div>
        );
    }
}
export default Classcomp2;
