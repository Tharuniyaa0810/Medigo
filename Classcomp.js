import React from "react";
import image  from './background.jpg';
import mylogo from './logonew.png';
import './App.css';
import { Link } from "react-router-dom";
class Classcomp extends React.Component
{
  
    render()
    {
        const mystyle={
            backgroundImage:`url('${image}')`,
            height:'100vh',
            marginTop:'0px',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
        };
        return(
            <div style={mystyle}>
            <img src={mylogo} alt="logo" className="loogo"/>
            <h1 style={{marginTop:'0px',fontSize:'55px',fontFamily:'papyrus',color:'#155f4e',marginLeft:'80px' }}>MediGo</h1>
            <form className="deee">
            <h4 className="ke">For Patient</h4>
            <h1 className="kee">REGISTRATION</h1>
                <br></br><br></br><br></br>        
                <input className="logintext" type="text" name="name" placeholder="  First Name" required/>
                <input className="m" type="text" name="name" placeholder="  Last Name" required/><br></br><br></br>
                <input className="logintext" type="text" name="age" placeholder="  Age" />
                <input className="m"style={{paddingLeft:'20px',width:'390px'}}type="text" name="gender" placeholder="Gender"/><br></br><br></br>
          
                <input className="logintext" type="text" name="address" placeholder="  Address1" required/>
                <input className="m" type="text" name="address" placeholder="  Address2" required/><br></br><br></br>
                <input className="logintext" type="text" name="state" placeholder="  State" required/>
                <input className="m" type="text" name="district" placeholder="  District" required/><br></br><br></br>
                <input className="logintext" type="text" name="email" placeholder="  E-Mail" required/>
                <input className="m" type="text" name="no" placeholder="  Contact Number" required/><br></br><br></br>
               <Link to="/Validation"><button  className="co" style={{background:"red" ,color:"white",marginLeft:'35%',marginTop:'110px'}}>Cancel</button></Link> 
<Link to="/User" ><button className="co" style={{background:"blue",color:"white",marginLeft:'10%',marginTop:'110px'}}>Register</button></Link>
                

            </form>
            </div>
        );
    }
}
export default Classcomp;