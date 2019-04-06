import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'; 

const man = require('../man.png')

const NavBar = (props) =>{
    console.log(props);
    return(
        <nav className="nav-wrapper grey darken-3">
           <i className="brand2 left"><img src={man} alt=""/></i>
            <div className="App-link right med-and-down"> 
                <ul>{/*used to position the content on the right using materialized css*/}
                    <li><NavLink to="/">Home</NavLink></li>{/*using link stop the router from making a request to server and let react handle the link instead*/}
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/apps">Apps</NavLink></li>
                    <li><NavLink to="/signup">SignUp</NavLink></li>
                </ul>
            </div>
        </nav>
        
    )
}
export default withRouter (NavBar);//used to superchage and pass props into the root page