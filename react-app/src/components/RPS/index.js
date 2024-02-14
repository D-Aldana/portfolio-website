import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ParticleBackground from './Particles';

const RPS = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect (() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000)
    }
    , [])

    const title = "Rock Paper Scissors".split('')

    return (
        <>
            <div className='container rps-page'>
                <ParticleBackground />
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={title} idx={15} />
                        <a target="_blank" rel='noreferrer' href='https://github.com/D-Aldana/RockPaperScissors'>
                            <FontAwesomeIcon icon={faGithub} className='github-link' />
                        </a>
                    </h1>
                    
                    <p>
                    I created an interactive web application where users can play Rock Paper Scissors against a computer using their webcam. Leveraging Python and React, I engineered a seamless experience, capturing and processing webcam input with the OpenCV library.
                    </p>

                    <p>
                    Integrating a trained TensorFlow model enabled real-time hand gesture detection, while a custom-built REST API, powered by Flask and SocketIO, facilitated smooth communication between the frontend and backend. 
                    </p>

                    <p>
                    To add a competitive edge, I incorporated Redis to store and display highscores.
                    </p>

                    <p>
                    Click the Github link above to view the source code.
                    </p>
                </div>

                <div className='video-zone'>
                    <iframe 
                        title='rps' 
                        src="https://www.youtube.com/embed/kGOQfLFzJj8?si=6jtQ8GgAd1K61R6H" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                        alt="Video Stream"/>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default RPS