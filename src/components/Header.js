import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 

import '../App.css';

class Header extends Component{
    render(){
    
        return (
            <div className = "page-header">
                

                <img src="/Aptech.jpg" alt="My Portrait"/>

                
                <h1>Henok Bezawork: <small>Full Stack Developer based in Addis Ababa, Ethiopia.</small></h1>               
            
                 <Link to="/" className="col-md-4"> Home </Link>
                 <Link to="/projects" className="col-md-4">Projects</Link>
                 <Link to="/contact" className="col-md-4">Contact Me</Link>


                 
            

            </div>
        )
    }
};

export default Header;