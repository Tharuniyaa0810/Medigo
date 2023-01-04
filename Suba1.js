import React from "react";
import imagge from './hello.jpg';
import loggo from './logonew.png';
import './Project.css';
import myimage from './doc.png';
import Myimage from './slogan.png'
import icon from './doc 3.png'
import icon1 from './doc 2.png';
import {Link} from "react-router-dom";
//import search from "./loupe.png";
import { Button } from "@mui/material";

class Demo extends React.Component{
    render()
    {
    const myStyle={
        backgroundImage: 
        `url('${imagge}')`,
        height:'110vh',
        marginTop:'-70px',
        fontSize:'40px',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
    };
    return(
          <div style={myStyle}>
            <img src= {loggo} alt="logo" className='loogo'></img> 
            <h1 style={{marginTop:'70px',fontSize:'55px',fontFamily:'papyrus',color:'#155f4e',marginLeft:'80px' }}>MediGo</h1>
           
                 <Button
    style={{
        borderRadius:15,
        backgroundColor: "#EAE4E4",
        color:"#042d2c",
        padding: "10px 40px",           
        fontSize: "10px",
        fontFamily:"cursive",
        fontWeight:'bold' ,
        left: "1400px",
        top:'-80px'
        
    }}
    variant="contained"
    className='hvr-float-shadow1'
    >
    User
</Button>
        <hr className='line'></hr>
           <br></br>
           <Link to="/Ranjith">
           <form className="border"/>
           <img src={icon} alt="Icon" className="Icon"/>
           <p id="para2"> DR.MANOHARAN BDS..;   Oral Medicine & Radiology Abishek Hospital TVS Nagar,Cbe-25 Open-Closes 11:00PM</p>
           <form className="border1"/>
           <img src={icon1} alt="Icon1" className="Icon1"/>
           <p id="para3">DR.DIVYA BHARATHI MBBS,MS..; Cardiologist,Chief Surgeon REX HospitalNSR Road,Saibaba Colony,Cbe-13 Open-Closes 10:00PM</p>
           <form className="border2"/>
           <img src={icon} alt="Icon" className="Icon3"/>
           <p id="para4">DR. PRABAKARAN K MBBS,MD...; General practitioner Paripoorna Estates,Cbe-36 Closed ⋅ Opens 6:30PM</p>
           <form className="border3"/>
           <img src={icon1} alt="Icon1" className="Icon4"/>
           <p id="para5">DR.GEETHA KRISHNAN P MBBS,MD,DNB...; Neurologist Krishna bakery, T-139, Kovaipudur Open ⋅ Closes 3:30PM ⋅ Reopens 7:30PM </p>
           </Link>
          <img src={myimage} alt="doctors" className="Doc"/>
         <img src={Myimage} alt="Slogan" className="slogan"/>
          </div>
    );
    }
}
export default Demo