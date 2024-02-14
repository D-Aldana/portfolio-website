import './index.scss'
import LogoS from '../../assets/images/logo-DJ.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHandScissors, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
        </Link>


        <nav>
            <NavLink exact="true" activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink> 

            <NavLink exact="true" activeclassname='active' to='/about' className='about-link'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink> 

            <NavLink exact="true" activeclassname='active' to='/rps' className='rps-link'>
                <FontAwesomeIcon icon={faHandScissors} color='#4d4d4e' />
            </NavLink> 

            <NavLink exact="true" activeclassname='active' to='/contact' className='contact-link'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink> 
            
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/dj-aldana/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/D-Aldana'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/dj_aldana32/'>
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li>
            {/* <li>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCJJ_2q-MeHCttDugO2KNEfw'>
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                </a>
            </li> */}
        </ul>
    </div>


)



export default Sidebar