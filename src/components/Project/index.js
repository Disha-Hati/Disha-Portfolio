import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import {  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { useState,useEffect } from 'react';
  import Loader from 'react-loaders';
  import { ProjectData } from '../../data/ProjectData';

const Project =()=>{
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
                        strArray={['M','y',' ','P','r','o','j','e','c','t','s']}
                        idx={15}
                    />
                </h1>
                <p> For my projects, visit my <a href='https://github.com/Disha-Hati'>Github</a> link</p><br/>
                
            </div>

           

        <Loader type="pacman" />
        </div>
    )
}

export default Project