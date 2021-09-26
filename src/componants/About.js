import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Img from './Image.jpg'
import './Index.css'
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
                   Having landed into sales after high school and making 
                   a succesful career as a Recruitment Consultant I found myself wanting
                   change. I've always been drawn to and had a fascination with programming
                   but never managed to make a career of it.
                   <br></br>
                   <br></br>
                   In 2019 I tried to self-teach Python and while I did learn a lot, ultimately I failed.
                   However in 2021 with a renewed sense of confidence and desire I start FreeCodeCamp
                   Which gave me a more structured approach to learning. 4 months on and I've competed
                   Certifications and have begun my first project, that being this portfolio page. 
                   <br></br>
                   <br></br>

                    </p>
                    
                </div>
            </body>
        
    )
}

export default About
