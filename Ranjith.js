import * as React from 'react';
import Button from '@mui/material/Button';
import './ranjith.css'
import bgggg from './background.jpg'
import logo11 from './logonew.png'
import { Link } from 'react-router-dom';
import UserContext from './UserContext';



export default function Ranjith() {
    const user = React.useContext(UserContext);
    var nextId=1;
  

   return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <img src={bgggg} alt="bg" className="groundback"></img>
                <img src={logo11}  alt="logo" id='logo11'></img>
                <h1 className='medig'>MediGo</h1>
                <div className='container'> 
                   <Link to="/User"> <button class="btn"><i class="fa fa-home"></i></button></Link>
                    <h2 className='head1'>TO MAKE APPOINTMENT</h2>
                    <h3 className='head2'>FILL UP THE FORM</h3>
                    <div >
                       
                        <input placeholder=' Name' type='text' className='iii' 
                       value={user.name}
                       onChange={e => user.setName(e.target.value)}
                        />
                        <input placeholder=' Age' type='number' className='iii' 
                         value={user.age}
                         onChange={e => user.setAge(e.target.value)}
                        />
                        <select className='inn2' value={user.doctor}
                         onChange={e => user.setDoctor(e.target.value)} >
                            <option hidden value="Doctor">Doctor</option>
                            <option value="Dr.Manoharan">Dr.Manoharan</option>
                            <option value="Dr.Divya Bharathi">Dr.Divya Bharathi</option>
                            <option value="Dr.Prabakaran">Dr.Prabakaran</option>
                            <option value="Dr.Geetha Krishnan">Dr.Geetha Krishnan</option>
                           
                        </select>
                        <input placeholder=' Reason' type='text' className='iii' 
                         value={user.reason}
                         onChange={e => user.setReason(e.target.value)} />
                        <input placeholder=' Date of Appointment' type='date' className='iii' 
                       value={user.date}
                       onChange={e => user.setDate(e.target.value)} />
                        <select className='inn2' value={user.session} 
                         onChange={e => user.setSession(e.target.value)}>
                            <option hidden value="Session">Session</option>
                            <option value="AN">AN</option>
                            <option value="FN">FN</option>
                           
                        </select>
                        
                    </div>
             <Link to="/">  <Button variant="contained" id='btn1' onClick={() => {
        user.setName('');
        user.setAge();
        user.setDate("");
        user.setDoctor("");
        user.setReason("");
        user.setSession("");
        user.Details.push({
          id: nextId++,
          name: user.name,
          age: user.age,
          doctor:user.doctor,
          reason:user.reason,
          date:user.date,
          session:user.session

        });
      }}>Confirm</Button></Link> 

                </div>
            </div>
        );    
}