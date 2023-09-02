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
                <p>As someone in the field of Technology, my area of expertise is in web development and data engineering. I am well versed with HTML,CSS,JavaScript,Java,Python and MERN stack. </p>
                <p>Also as an data engineer, I have in-depth knowledge about Database designs,SQL Languages(Postgres,MySQL,RedShift),Data Models,Data Warehousing, ETL and ELT, Big Data Technologies like HDFS and Apache Spark(API- PySpark) and Data Containerization(Docker) and Orchestration(Kubernetes). I have also experience in Data Integration Platforms like Apache Airflow and Cloud services like AWS.I also have understanding about BI and data visualization tools.</p>
                
            </div>

            <div className="stage-cube-cont">
              <div id="stars"></div>
              <div id="star2"></div>
              <div id="star3"></div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDatabase} color="#EC4D28" />
            </div>
          </div>
        </div>
        <Loader type="pacman" />
        </div>
    )
}

export default About;