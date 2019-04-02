import React from 'react'

const NavBar = () =>{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <ul className="right">{/*used to position the content on the right using materialized css*/}
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/apps">Apps </a></li>
                    <li><a href="/signup">SignUp</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;