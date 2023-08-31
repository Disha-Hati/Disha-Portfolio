import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faHome,faPenNib,faSuitcase,faUser } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub,faYoutube,faSkype, faInstagram, faFacebook,} from '@fortawesome/free-brands-svg-icons'



const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className='logos' src={LogoS} alt="logo" />
            
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>

            <NavLink exact="true" className="about-link" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>

            <NavLink exact="true" className="project-link" activeclassname="active" to="/project">
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'/>
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferer' href='https://www.linkedin.com/in/disha-hati-a718a3199/' >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferer' href='https://github.com/Disha-Hati' >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferer' href='/https://leetcode.com/Disha-Hati/' >
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferer' href='https://medium.com/@disha55' >
                    <FontAwesomeIcon icon={faPenNib} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar