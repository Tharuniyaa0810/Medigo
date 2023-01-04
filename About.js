import React from 'react';
import bimg from './background.jpg';
import logo from './logonew.png';
import vision from './vision.png';
import trust from './trust.png';
import connect from './global-connection.png';
export default function About()
{
    const bkimg={
        backgroundImage:`url('${bimg}')`,
        height:'100vh',
        marginTop:'1px',
        backgroundSize:'cover',
        backgroundRepeat:'no repeat'
    };
    return(
        <div style={bkimg}>
            <img src= {logo} alt="logo" className='loogo'></img> 
                <h1 className='medigo'>MediGo</h1>
                <div>
                <hr className='line'></hr>
                </div> 
                <h1 style={{color:"hsl(169, 75%, 17%)",
                fontSize:"40px",textAlign:"center",
                fontWeight:"400px",position:"absolute",top:"100px",
                left:"35%",fontFamily:"papyrus"}} className="head2">About &nbsp;MediGo</h1>
                         <p className='para'>MediGo is revolutionizing healthcare by enabling consumers to find the best doctors,<br></br>
                             book instant appointments, and make better, more informed health decisions.</p>
                <div className='visdiv'><img src={vision} alt="vision" className='vision'></img>
               <img src={connect} alt="connect" className='connect' ></img>
                <img src={trust} alt="trust" className='trust'></img>
                <h1 className="headtru">TRUST</h1>
                <h1 className='headcon'>CONNECT</h1>
                <h1 className='headtran'>TRANSPARENCY</h1>
                <p className='para2'>We understand healthcare goes beyond signs, symptoms, diagnosis, and treatment. 
                    It’s about the deep connection between doctors and patients that leads to 
                    continuous care and sustained, better outcomes.</p>
               <p className='para1'>MediGo works on trust.We always have and always will do everything we possibly can to uphold this trust.</p>
                <p className='para3'>We believe in full disclosure. We believe in communicating openly and honestly, and holding ourselves to the highest ethical standards.</p> </div>            
                <div style={
    {
        height:"58%",
        width:"50px",
        borderLeft: "3px solid rgba(11, 59, 59, 0.801)",
        left:"34%",
        top:"39.7%",
        position:"absolute"
    }
}></div>   
                <div style={
    {
        height:"58%",
        width:"50px",
        borderLeft: "3px solid rgba(11, 59, 59, 0.801)",
        left:"60%",
        top:"39.7%",
        position:"absolute"
    }
}></div>   
                  
        </div>
    )
}