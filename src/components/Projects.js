import React, { Component } from 'react';
import '../App.css';

class Projects extends Component{
    render(){
    
        return (
            <div className = "row">
                <div className = "col-md-4 well">
                 <h3>To do List Application</h3>
                
                  <a href="https://henybeza.github.io/todoapp/">Todo List Application using React JS</a>
                  
                
                </div>

                <div className = "col-md-4 well">
                 <h3>Weather forecasting Application</h3>
                 <a href="https://henybeza.github.io/todoapp/">Weather forecasting Application using React JS</a>
                </div>

                <div className = "col-md-4 well">
                 <h3>Calculator Application</h3>
                 <a href="https://henybeza.github.io/todoapp/">Calculator Application using React JS</a>
                </div>
                
                <div className = "col-md-4 well">
                 <h3>(On going project)</h3>
                 <a href="https://henybeza.github.io/todoapp/">Online shopping Application using React JS</a>
                </div>

                <div className = "col-md-4 well">
                 <h3>Website for my Church</h3>
                 <a href="https://henybeza.github.io/todoapp/">Parish Website Application using React JS</a>
                </div>

                <div className = "col-md-4 well">
                 <h3>A sample website for High School</h3>
                 <a href="https://henybeza.github.io/todoapp/">School website Application using HTML and CSS</a>
                </div>

                

              

              

            </div>
        )
    }
};

export default Projects;