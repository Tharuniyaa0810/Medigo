import React from 'react';
import image from './background.jpg';
import img1101 from './background - Copy.jpg';
import logo from './logonew.png';
import ad from './freeCheck.png';
import findDoctor from './findDoc.png';
import appoint from './appoin.jpg';
import { Button } from '@mui/material';
import Footer from './Footer';
import './index.css'
import { Link } from 'react-router-dom';
//import Tooltip from '@mui/material';
export default class User extends React.Component{
    render()
    {
        const bbgg={
            backgroundImage:`url('${image}')`,
            height:'100vh',
            marginTop:'1px',
            backgroundSize:'cover',
            backgroundRepeat:'no repeat'
        };
        const brdgd={
            backgroundImage:`url('${img1101}')`,
            height:'100vh',
            marginTop:'330px',
            backgroundSize:'cover',
            backgroundRepeat:'no repeat',  
        };
        
        return(
            <div style={bbgg}>
              <img src= {logo} alt="logo" className='loogo'></img> 
                <h1 className='medigo'>MediGo</h1>
                <div className='but'>
               <Link to="/projectlogin"> <Button
    style={{
        borderRadius:15,
        backgroundColor: "#EAE4E4",
        color:"#042d2c",
        padding: "10px 40px",
        fontSize: "10px",  
        fontFamily:"cursive",
        fontWeight:'bold'  ,
        border:"2px",
      
    }}
    variant="contained"
    className='hvr-float-shadow1'
    >
    Doctor Login
</Button> </Link>
                </div >
                <div className='but1'>
<Link to="/Patient"><Button
    style={{
        borderRadius:15,
        backgroundColor: "#EAE4E4",
        color:"#042d2c",
        padding: "10px 40px",           
        fontSize: "10px",
        fontFamily:"cursive",
        fontWeight:'bold'  
        
    }}
    variant="contained"
    className='hvr-float-shadow1'
    >
    Patient Login
</Button></Link>
               
                </div>
                <div>
                <hr className='line'></hr>
                </div> 
                <div>
<div className='topnav' >
  <ul  >
    <Link to="/Suba1"><li >Find Doctors</li></Link>
   <li onClick={()=>{alert('Please Login to Continue')}}>Book Appointment</li>
    <Link to="/About"><li>About Us</li></Link>
  </ul>
</div>
</div>
               <div className='adv'>
                <img src={ad} alt='ad' className='hvr-float' height='400px' width='950px'></img></div>
                <div className='rec' onClick={()=>{alert('Please Login to Continue')}}></div>
                <img src={findDoctor} alt='Find Doctors' className='FindDoc' height='300px' width='280px' onClick={()=>{alert('Please Login to Continue')}}/>
                
                
<h1 className='fd' onClick={()=>{alert('Please Login to Continue')}}>Find Doctors Near You</h1> 
<div class="lietext">
   
                <form>
                    <h3 className='lineUp'>Search for
 medical Experts  for 
your Specifications
 with ease. </h3>
                </form>
  </div>
                <div style={brdgd} >
                    <div className='rec1' onClick={()=>{alert('Please Login to Continue')}}>
                   <img src={appoint} alt='appointment' className='Ap' height='300px' width='280px' onClick={()=>{alert('Please Login to Continue')}}/>
<h1 className='aptext' onClick={()=>{alert('Please Login to Continue')}}>Book Appointments In-Clinic</h1>
</div>
<div className='booktext'>
                   <h3 className='lineUp'>Book Appointments
 in convenient Timings 
with Description 
of your needs </h3>
</div>
                
                </div>
          <div className='foot'>  <Footer></Footer>   </div> 
                    
<div className='rat'>
<h1 style={{color:'whitesmoke',fontFamily:'papyrus',fontSize:'35px',textAlign:"center"}}>Rating</h1>
<fieldset class="rating" >
    <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
</fieldset>
</div> 
                
            </div>
            )
        }

}