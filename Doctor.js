import React from "react";
import backgrdimg from './background.jpg';
import logimg from './logonew.png';
import UserContext from "./UserContext";
import './Doctor.css'
import { Button } from "@mui/material";
import myig from './doctor1.png'
import docpic from './medical-team.png';
import arrow from './right-arrow.png';
import myquote from './quote.png';
import myquot from './quote1.png';
import pat from './patternNN.jpg';
import { Link } from "react-router-dom";

const Doctor=()=>{
   
   // const count = useSelector((state) => state.user.value)
    const user = React.useContext(UserContext);

    const back1img={
        backgroundImage:`url('${backgrdimg}')`,
        height:'100vh',
        marginTop:'0px',
        backgroundSize:'cover',
        backgroundRepeat:'no repeat'
    };
    const patt={
        backgroundImage:`url('${pat}')`,
        height:"60px",
        marginTop:'0px',
      
       
      
    };
    
    return(
        <div style={back1img} >
            <Link to="/"><img src= {logimg} alt="logo" className='log'></img> 
            <h1 className='mediGo'>MediGo</h1></Link>
            <div>
                <hr className='linehr'></hr>
                </div>
                <Button
    style={{
        borderRadius:15,
        backgroundColor: "#EAE4E4",
        color:"#042d2c",
        padding: "10px 40px",           
        fontSize: "13px",
        fontFamily:"cursive",
        fontWeight:'bold'  ,
        left:"1350px",
        top:"30px",
        height :"40px",
        width:"150px",
        
    }}
    variant="contained"
    
    >
    Doctor
</Button>

<div style={
    {
        height:"91%",
        width:"50px",
        borderLeft: "3px solid green",
        left:"38.5%",
        top:"85px",
        position:"absolute"
    }
}></div>
<form className="formback">
<img src= {docpic} alt="doctor" className='doctorpic'></img> 
<h3 className="quote">Care and cure is our goal</h3>
<img src={myquote} alt="quoteimg" className="quoteimg"/>
<img src={myquot} alt="quoteimg" className="quoteimg1"/></form>
<h3 className="mentee">Your Mentee's are Waiting...</h3>
<img src={arrow} alt="arrow" className="arrow"/>
            <div className="details">
                <h1 className="appdet" style={{fontSize:"50px"}}>Appointment Details</h1>
                { /* <ul className="listt">
                <li>{user.Details}</li>
           <li className="listfont">Patient Name &ensp;: &ensp;{user.name}</li>
            <li className="listfont">Age &emsp; &ensp;: &ensp;{user.age}</li>
            <li className="listfont">Doctor &ensp;:&ensp;{user.doctor}</li>
            <li className="listfont">Reason&ensp; :&ensp;{user.reason}</li>
            <li className="listfont">Timing &ensp;:&ensp;{user.date}</li>
<li className="listfont">Session&ensp;:&ensp;{user.session}</li>
<li key={artist.id}>Patient Name:{artist.name}</li>
<li key={artist.id}>Age:{artist.age}</li>
<li key={artist.id}>Doctor:{artist.doctor}</li>
<li key={artist.id}>Reason:{artist.reason}</li>
<li key={artist.id}>Date:{artist.date}</li>
<li key={artist.id}>Session:{artist.session}</li>
<br></br>
</ul>*/}

<table  style={{marginLeft:"-100px",background:"lightblue",fontSize:"17px",width:"900px",fontFamily:"verdana"}}>
                <tr >
                 
                    <th > Patient Name</th>
                    <th >Age</th>
                    <th >Doctor Name</th>
                    <th>Reason</th>
                    <th>Timings</th>
                    <th>Session</th>
                </tr></table>
        {user.Details.map(artist => (
            <table  style={{marginLeft:"-100px",background:"lightblue",width:"900px",textAlign:"center",fontSize:"17px",fontFamily:"cursive"}} >
                <tr >
                    
                    <td width="194.5px" key={artist.id}>{artist.name}</td>
                    <td width="61px" key={artist.id}>{artist.age}</td>
                    <td width="192px"key={artist.id}>{artist.doctor}</td>
                    <td width="105px"key={artist.id}>{artist.reason}</td>
                    <td width="116px"key={artist.id}>{artist.date}</td>
                    <td key={artist.id}>{artist.session}</td>

                </tr>
            </table>
            ))}
        
        
      
            </div>
        </div>
    );
   
}

export default Doctor;