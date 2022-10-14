import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Maindiv">
      <div className='topnav'>
        <div className='logo'>Hospital1</div>
        <div className='Listitems'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>                                  
          </ul>
        </div>

      </div>
      <div className='Leftnav'>
        <div className='Dash'>
        <ul>
        <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/Activity">Activity</Link></li>
            <li><Link to="/Patient">Patient</Link></li>
            <li><Link to="/Schedule">Schedule</Link></li>
            <li><Link to="/Settings">Settings</Link></li>
            <li><Link to="/Teams">Teams</Link></li>            
          </ul>

        </div>
      </div>
      
  
      
     
    </div>
  )
}

export default Navbar