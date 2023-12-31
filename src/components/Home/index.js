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

                <h2>FrontEnd Developer | Data Engineer | Blogger | Data Structure and Algorithm</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
            <div id="stars"></div>
              <div id="star2"></div>
              <div id="star3"></div>
        </div>

        <Loader type="pacman"/>
        </>
        
    );
}

export default Home