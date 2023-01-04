

import React,{ useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Main from './Main';
import './ranjith.css'
import UserContext from './UserContext';

export default function RouteApp(){

    const [Details,setDetails]=useState([]);
    const[name,setName]=useState("");
    const [age,setAge]=useState();
    const [date,setDate]=useState("");
    const [session,setSession]=useState("");
    const [reason,setReason]=useState("");
    const [doctor,setDoctor]=useState("")
    

    return (
        <UserContext.Provider value={{Details,setDetails,age,setAge,name,setName,date,session,setDate,setDoctor,doctor,
        reason,setReason,setSession}}>
       <Main ></Main>
       </UserContext.Provider>
        )
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <RouteApp />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

