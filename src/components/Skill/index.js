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

const Skill=()=>{
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
                        strArray={['M','y',' ','S','k','i','l','l','s']}
                        idx={15}
                    />
                    
                </h1>
                <p>Within the realm of technology, my expertise shines brightly in the domain of web development, where I have mastered HTML, CSS, JavaScript, Java, and the MERN stack. I thrive in creating dynamic and user-friendly web applications that leave a lasting impression. </p>
                <p>In the world of data engineering, I possess comprehensive knowledge in database design, SQL languages (including Postgres, MySQL, and RedShift), data modeling, data warehousing, ETL and ELT processes, and Big Data technologies like HDFS and Apache Spark. I excel in data containerization using Docker and orchestration with Kubernetes. My experience extends to data integration platforms such as Apache Airflow, allowing for seamless workflow automation. My understanding of business intelligence (BI) and data visualization tools adds another layer to my skill set, enabling me to transform complex data into actionable insights.
</p>
                
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

export default Skill;