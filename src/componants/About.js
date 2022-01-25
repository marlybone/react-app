import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Img from './Image.jpg'
import './Index.css';
import Lin from './Lin.js'
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const About = () => {
    
    return (
            <body className='container1'>
                <div className='home-page'>
                    <div className='img'>
                        <div className='img1'>
                      <Lin />
                    <img className='abtimg' src={Img} height='300px' width='300px' />
                        </div>
                    </div>
                    
                    <p className='paragraph'>
                   Seven years of professional Recruitment experience within Technology. . A tech hobbyist and 
                   Aspiring Software Engineer, I decided to self-teach development,
                   </p>
                   
                   <p className='paragraph'>
                   In 2019 I tried to self-teach Python and while I did learn a lot, ultimately I failed.
                   However in 2021 with a renewed sense of confidence and desire I start FreeCodeCamp
                   Which gave me a more structured approach to learning. 4 months on and I've competed
                   Certifications and have begun my first project, that being this portfolio page. 
                   </p>
                    
                </div>
            </body>
        
    )
}

export default About
