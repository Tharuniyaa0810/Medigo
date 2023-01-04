import React from "react";
import Ranjith from './Ranjith';
import MainClass from './MainClass';
import Suba1 from './Suba1';
import ProjectLogin from './projectlogin';
import User from './User';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Project from './project';
import Validation from './Validation';
import Classcomp from './Classcomp';
import Doctor from './Doctor';
import About from "./About";
import Patient from "./Patient"
function Main()
{
return(
    <div> <Router>
    <Routes>
    <Route  path="/" element={<MainClass />}></Route>
    <Route path="/Suba1" element={<Suba1/>}></Route>
    <Route path="/projectlogin" element={<ProjectLogin />}></Route>
    <Route path="/User" element={<User/>}></Route>
    <Route path="/Classcomp" element={<Classcomp/>}></Route>
    <Route path="/project" element={<Project/>}></Route>
    <Route path="/Ranjith" element={<Ranjith  />}></Route>
    <Route path="/Validation" element={<Validation/>}></Route>
    <Route path="/Doctor" element={<Doctor/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Patient" element={<Patient/>}></Route>
    </Routes>
    </Router></div>
)
}
export default Main;