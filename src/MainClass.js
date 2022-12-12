import React from 'react';
import image from './background.jpg';
import img1 from './background - Copy.jpg';
import logo from './logonew.png';
import ad from './freeCheck.png';
import search from './loupe.png';
import findDoctor from './findDoc.png';
import appoint from './appoin.jpg';
import phone from './telephone.png';
import mail from './gmail.png';
//import Monkey from './r';
//import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';



export default class MainClass extends React.Component{
    render()
    {
        const bg={
            backgroundImage:`url('${image}')`,
            height:'100vh',
            marginTop:'1px',
            backgroundSize:'cover',
            backgroundRepeat:'no repeat'
        };
        const bgd={
            backgroundImage:`url('${img1}')`,
            height:'100vh',
            marginTop:'155px',
            backgroundSize:'cover',
            backgroundRepeat:'no repeat',  
        };
        
        return(
            <div style={bg}>
                <img src= {logo} alt="logo" className='logo'></img> 
                <h1 className='medigo'>MediGo</h1>
                <div className='but'>
                <button className='hvr-float-shadow ' >Doctor Login</button>
                </div >
                <div className='but1'>
                <button className='hvr-float-shadow1'>Patient Login</button>
                </div>
                <div>
                <hr className='line'></hr>
                </div>
                <input type='text' className='search' placeholder='           
                        FIND DOCTORS,HOSPITALS,DISPENSARY NEAR YOU.........' ></input>
                <select className='drop'>
                  <option selected value="Cardiologist">Cardiologist</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Allergist">Allergist</option>
                  <option value="Dermatologist">Dermatologist</option>
                 </select>
               <img src={search} alt='search'  className='searchicon' height='35px' width='35px'/>
               <div className='adv'>
                <img src={ad} alt='ad' className='hvr-float' height='400px' width='950px'></img></div>
                <div className='rec'></div>
                <img src={findDoctor} alt='Find Doctors' className='FindDoc' height='300px' width='280px'/>

                
<h1 className='fd'>Find Doctors Near You</h1>
<div class="lie">
   
                <form>
                    <h3 className='lineUp'>Search for
 medical Experts  for 
your Specifications
 with ease. </h3>
                </form>
  </div>
                <div style={bgd} >
                    <div className='rec1'>
                   <img src={appoint} alt='appointment' className='Ap' height='300px' width='280px'/>
<h1 className='aptext'>Book Appointments In-Clinic</h1>
</div>
<div className='text2'>
                   <h3 className='lineUp'>Book Appointments
 in convenient Timings 
with Description 
of ur needs </h3>
</div>
                <hr className='p'></hr>
                </div>
                    
<div className='rat'>
<h1>Rating</h1>
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
                <div>
                    <b><h3 className='med' height='30px' width='50px'>Medigo</h3></b>
                    <h5 className='h5' >             -Now You can Get Appointments In-Clinic Without
                     Stepping Out of Home</h5></div>
                     <div className='n'>
<h1 className='con'>Contact</h1> 
<img src={phone} alt='ph'className='ph' height='30px' width='30px'></img>
<h2 className='num'>9877645678</h2>
<img src={mail} alt='mail' className='mail' height='30px' width='30px'></img>
<h2 className='gm'>Medigo@gmail.com</h2>

</div>
                
            </div>
            )
        }

}