import React from 'react'
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Index.css';


const Lin = () => {
    return (
        <body>
        <div className='lin'>
            <Link to='https://www.linkedin.com/in/marlon-stevenson-510738109/'>
                <FontAwesomeIcon icon={faLinkedin} size='2x'></FontAwesomeIcon>
            </Link>
        </div>

        <div className='git'>
        <Link to='https://github.com/marlybone'>
            <FontAwesomeIcon icon={faGithub} size='2x'></FontAwesomeIcon>
        </Link>
    </div>
    </body>
    )

}

export default Lin;
