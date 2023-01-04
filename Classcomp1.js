import React from "react";
import image  from './background.jpg';
import logo from './logonew.png';
import{Link} from "react-router-dom";
import './App.css';
import './index.css';
class Classcomp1 extends React.Component
{
    render()
    {
        const mystyle={
            backgroundImage:`url('${image}')`,
            height:'100vh',
            marginTop:'70px',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
        };
        return(
            <div style={mystyle}>
            <img src= {logo} alt="logo" className='loogo'></img> 
            <h1 className='medig'>MediGo</h1>
            <form className="brm">
            <h4 className="ke">For Patient</h4>
            <h1 style={{textAlign:"center",marginLeft:'-500p x',paddingTop:'60px',fontSize:'50px',position:'relative',top:'0%',fontFamily:'papyrus'}}>Log In</h1>
            <input className="h" type="text" placeholder="E-mail Id" style={{marginLeft:'150px',marginTop:"70px",textAlign:"center",height:"30px",width:"400px"}}/><br></br><br></br>
            <input className="h" type="password" placeholder="Password" style={{marginLeft:'150px',textAlign:"center",height:"30px",width:"400px"}}/><br></br><br></br><br></br><br></br><br></br>
           <Link to="/Classcomp"><button  style={{background:"darkred",color:"white",marginLeft:'23%',padding:"5px 5px",width:"130px", height:"40.5px",marginTop:"-2px",borderRadius:'10px',fontSize:'15px',position:'absolute'}}>Create Account</button>   </Link> 
           <Link to="/User"> <button className="cob" style={{background:"blue",color:"white",marginLeft:'60%',width:"130px", height:"40.5px",fontSize:'18px'}} >Log In</button></Link>
           
           </form>
           </div>
           
           
        );
    }
}
export default Classcomp1;