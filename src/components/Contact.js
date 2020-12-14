import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class Contact extends Component{
    render(){
    
        return (
            <div className = "container"> 
           <h4>GitHub: <Link>henybeza</Link></h4>
           <h4>Linkedin:<Link>Henok Bezawork</Link></h4>
           <h4>Email: <Link>henny8000@gmail.com</Link></h4>  
       
           <h4>Instagram:<Link>hennybezzy</Link></h4>
           <h4>Facebook:<Link>Henok Bezaworq</Link></h4>
           <h4>Youtube:<Link>Henok Bezawork</Link></h4>

            </div>
        )
    }
};

export default Contact;