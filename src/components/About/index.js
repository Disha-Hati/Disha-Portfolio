import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import {
    faJava,
    faCss3,
    faHtml5,
    faJsSquare,
    faReact,
    faDocker,
    faPython,
  } from '@fortawesome/free-brands-svg-icons';

  import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { useState,useEffect } from 'react';
  import Loader from 'react-loaders';

const About =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    />
                    
                </h1>
                <p>Hello! I am a Computer Science graduate deeply passionate about technology and driven to create a lasting impact in the field. I pursued a B.Tech degree in Computer Science, where I honed my expertise in programming, data structures and algorithms, as well as and web development and design. What sets me apart is my ability to quickly grasp complex concepts and my meticulous attention to detail, enabling me to efficiently identify and solve problems.</p>
                
            </div>

            <div className="stage-cube-cont">
              <div id="stars"></div>
              <div id="star2"></div>
              <div id="star3"></div>
          
        </div>
        <Loader type="pacman" />
        </div>
    )
}

export default About;