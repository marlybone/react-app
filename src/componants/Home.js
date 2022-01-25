import React from 'react'
import './Index.css' 
import Anitext from './Anitext';
import Footer from './Footer';

const Home = () => {
    return (
        
            <body className='container1'>
                <div className='about-page'>
                    <Anitext />
                    <p className='fs'>Aspiring Full Stack Developer</p>
                    <p className='techs'>Javascript, React, CSS3, HTML5, 
                        Python, JQuery, SASS, Bootstrap, D3.JS, Redux, Node.js,
                        VsCode. 
                        </p>
                </div>
                
            </body>
            
        
    )
}

export default Home
