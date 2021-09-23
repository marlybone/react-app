import React, {useState} from 'react' 
import {Link} from 'react-router-dom'
import { faDiceD20, faStarAndCrescent, faVirus } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'





function Navbar() {
  


    return (
      
          <body>
            <nav className="navbar">
    <ul className="navlist">
      <li className="nav-item">
          <Link to="/" className="navlink">
            <FontAwesomeIcon className='icon' icon={faMinimize} size='2x'/>
            <span className='textlogo'>
            <p className="link-text logo-text">BigMarl</p>
            </span>
            </Link>
          
          
      </li>
      
      <li className="nav-item">
        <Link to="/" className="navlink">
        <FontAwesomeIcon icon={ faGem } size='2x' />
        <span className="link-text">About</span>
            </Link>
          
        
      </li>
      
      <li className="nav-item">
        <Link to="/" className="navlink">
        <FontAwesomeIcon icon={faMeteor} size='2x'/>
        <p className="link-text">Portfolio</p>
            </Link>
          
        
      </li>
          
      <li className="nav-item">
        <Link to="/" className="navlink">
        <FontAwesomeIcon icon={faDiceD20} size='2x'/>
        <p className="link-text">Contact</p>
            </Link>
          
        
      </li>
          
        <li className="nav-item">
          <Link to="/" className="navlink">
          <FontAwesomeIcon icon={faSun} size='2x'/>
          <p className="link-text">Themes</p>
              </Link>
            
          
      </li>
      </ul>
      </nav>
      </body>
        
        
    )
    
}

export default Navbar
