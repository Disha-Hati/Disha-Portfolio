import { Link } from 'react-router-dom';
import './index.scss';
import Logo from './Logo';
import LogoTitle from '../../assets/images/logo-s.png';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
const Home =() => {

    const [letterClass,setLetterClass]=useState('text-animate');
    const nameArray =[ ' ','D','i','s','h','a'];
    const jobArray= ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r'];

    useEffect(() => {
         setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                
                <AnimatedLetters letterClass={letterClass} //Disha
                strArray={nameArray}
                idx={15}
                />

                <br/>

                <AnimatedLetters letterClass={letterClass} //Disha
                strArray={jobArray}
                idx={19}
                />

                </h1>

                <p>Hi there! I am Disha, currently working as an Data Engineer in Clarivate. I persued B.Tech degree in Computer Science and have sharpened my skills in Data Engineering,Data Structures and Algorithms,Web Designing and Web Development. I am a quick learner and have a keen eye for detail, which enables me to identify and solve problems effectively. I am also a team player and can work efficiently and effectively under pressure. My passion for technology and my drive to make an impact have driven me to constantly seek new challenges and opportunities for growth and development.</p>

                <h2>FrontEnd Developer | Data Engineer | Blogger | Data Structure and Algorithm</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman"/>
        </>
        
    );
}

export default Home