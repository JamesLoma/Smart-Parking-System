/*import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="Navbar">
            <h1>Smart Parking System</h1>
            <a href="/">Home</a>
            <a href="/">Parking Status</a>
            <a href="/">Maps</a>
            <a href="/">About us</a>

        </nav>
    );
}
 
export default Navbar;*/

import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="Navbar">
        <h1>SMART PARKING SYSTEM</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/parking-lot'>Parking Lot</Link>
        </li>
        <li>
          <Link to='/maps'>Maps</Link>
        </li>
        <li>
          <Link to='/settings'>Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


