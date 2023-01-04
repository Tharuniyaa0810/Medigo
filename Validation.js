import {useState} from 'react';
import{Link,Navigate,useNavigate} from "react-router-dom";
import React from "react";
import image  from './background.jpg';
import mylogo from './logonew.png';
import './App.css';
import './index.css';

export default function Validation() {
    const[email,setEmail]=useState('');
    const[error,setError]=useState('');
    const[msg,setMsg]=useState('');
    const[password,setPassword]=useState('');
    const[msgg,setMsgg]=useState('');
    const[errorr,setErrorr]=useState('');
    const mystyle={
        backgroundImage:`url('${image}')`,
        height:'102.5vh',
        marginTop:'-20px',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
    }
    const handleChange=(e)=>{
          setPassword(e.target.value);
          if(/^[A-Za-z0-9]{8}$/.test(password)===false){
            setErrorr('Password should contain atleast 8 characters');
          }  
          else
          {
            setErrorr('');
            return true;
          }
    }
    const checkEmail=(e)=>
    {
        setEmail(e.target.value);
        if(/^[0-9a-z._%+-]+@[0-9a-z.-]+\.[a-z]{2,4}$/.test(email)===false){
            setError('Please enter valid email');
        }
        else{
            setError('');
            return true;
            
        }
    }
   const sumit=()=>{
    if(email&&password){
        Navigate('/Doctor');
    }
    else{
    if(email!=='')
    {
        setMsg("");
       
    }
    else if(password!=='')
    {
        setMsgg("");
       
    }
    else if(email==='' && password==='')
    {
        setError('Email cannot be empty');
        setErrorr('Password cannot be empty');
    }
    else if(email===''){
    setError('Email cannot be empty');
    }
    else if(password==='')
    {
        setErrorr('Password cannot be empty');
    }
    
    
    
   }}
   

   return (
    <div style={mystyle}>
            <img src={mylogo} style={{marginTop:"30px"}}alt="logo" className="loogo"/>
            <h1 className='medig' style={{marginTop:"35px"}}>MediGo</h1>
            <form className="brm" style={{position:"absolute",top:"150px"}}>
            <h4 className="ke">For Patient</h4>
            <h1 style={{textAlign:"center",marginLeft:'-500p x',paddingTop:'60px',fontSize:'50px',position:'relative',top:'-6%',fontFamily:'papyrus'}}>Log In</h1>
            <Link to="/Classcomp"><h4  style={{color:"red",marginLeft:'20%',padding:"5px 5px",width:"180px", height:"40.5px",marginTop:"255px",borderRadius:'10px',fontSize:'18px',position:'absolute'}}>Create Account</h4>   </Link> 
     
                <label style={{position:"relative",top:"6px",left:"70px",fontSize:"27px",fontFamily:"monospace"}}>Email</label>
                <input type="text" required style={{
                    position:"relative",
                    top:"5px",left:"128px",
                    height:"25px",
                    width:"400px",
                    borderRadius:"0px"
                }} placeholder="Enter your E-mail" onChange={checkEmail}/>
                <p style={{color:"red",position:"relative",
                    top:"10px",
                    left:"234px"}}>{error}</p>
                <label style={{position:"relative",top:"23px",left:"70px",fontSize:"27px",fontFamily:"monospace"}}>Password</label>
                <input type="Password" required placeholder="Enter your Password" style={{
                    position:"relative",
                    top:"20px",
                    left:"84px",
                    height:"25px",
                    width:"400px",
                    borderRadius:"0px"

                }} onChange={handleChange}/>
                <p style={{color:"red",position:"relative",
                    top:"10px",
                    left:"234px"}}>{errorr}</p>
    
     <Link to="/User"><button className='cob' style={{background:"blue",color:"white",marginLeft:'60%'}} onClick={sumit}  >Login</button></Link>
   
     <p style={{position:"relative",
                    top:"70px",
                    left:"184px"}}>{msg}</p>
     <p style={{position:"relative",
                    top:"70px",
                    left:"94px"}}>{msgg}</p>
   
     
     </form>
           </div>
   )
  }