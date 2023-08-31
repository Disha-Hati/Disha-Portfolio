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
            </div>

            {ProjectData.map((data) => {
          return (
            <div key={data.id} className="tile">
              <div className="tile-1">
                <img
                  className="project-icon"
                  src={data.projectImage}
                  alt="project-icon"
                />
                <div>
                  <h1>{data.projectName}</h1>
                  <small>{data.date}</small>
                  <p>{data.projectInfo1}</p>
                  <p>{data.projectInfo2}</p>
                  <div className="tile-2">
                    <a href={data.appUrl} rel="noreferrer" target="_blank">
                      View Live
                    </a>
                    <a href={data.appCode} rel="noreferrer" target="_blank">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <Loader type="pacman" />
        </div>
    )
}

export default Project