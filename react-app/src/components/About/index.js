import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faPython, faDocker, faHtml5, faCss3, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import ParticleBackground from './Particles';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect (() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000)
    }
    , [])

    return (
        <>
        <div className='container about-page'>
        
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
                </h1>
                <p>
                Originally hailing from Prince George, BC, I made the leap to Vancouver Island back in 2017 to pursue my passion for baseball at Vancouver Island University. After two years on the field, I decided to switch gears and dive into the exciting world of software engineering at the University of Victoria.
                </p>
                <p>
                Following graduation, I embarked on an epic six-week backpacking adventure across six European countries, immersing myself in the diverse landscapes and cultures. Now, I've found myself back in Victoria, ready to tackle new challenges and make a mark in the software industry.
                </p>
                <p>
                When I'm not immersed in coding or exploring new destinations, you can find me honing my skills in kickboxing, strategizing over a game of chess, or unwinding with some tunes on my guitar.
                </p>
                <p>
                I'm always on the lookout for new opportunities to collaborate and learn from other passionate individuals. If you're interested in working together, feel free to reach out to me!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <ParticleBackground />
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#FFD438" />   
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faDocker} color="#74C0FC" />
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    );
 }

export default About;