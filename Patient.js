import React from "react";
import image  from './background.jpg';
import logo from './logonew.png';
import{Link} from "react-router-dom";
import './App.css';
import './index.css';
const Patient=()=>{

    
        
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
            <h1 style={{textAlign:"center",marginLeft:'-500p x',paddingTop:'60px',
               fontSize:'50px',position:'relative',top:'0%',fontFamily:'papyrus'}}>Log In</h1>
            <input className="h" type="text" placeholder="E-mail Id" 
                style={{marginLeft:'150px',marginTop:"70px",textAlign:"center",height:"30px",width:"400px"}}/><br></br><br></br>
            <input className="h" type="password" placeholder="Password" 
               style={{marginLeft:'150px',textAlign:"center",height:"30px",width:"400px"}}/><br></br><br></br><br></br><br></br><br></br>
            <label className='in13' style={{position:"absolute",top:"79%",left:"4%"}}>If you Don't have an account  ?</label>
            <Link to="/Classcomp"><h4 style={{marginLeft:"270px",marginTop:"-20px",fontSize:"15px",
              color:"blue",position:"absolute",top:"82.5%",left:"2%"}}>Create Account</h4></Link>        
            <Link to="/User"> <button className="cob" style={{background:"blue",color:"white",
                 marginLeft:'60%',width:"130px", height:"40.5px",fontSize:'18px'}}
                 onClick={()=>{alert('Login Successful')}}>Log In</button></Link>
           
           </form>
           </div>
           
           
        );
    }

export default Patient;
