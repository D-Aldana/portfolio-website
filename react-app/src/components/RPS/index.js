import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

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
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={title} idx={15} />
                    </h1>
                    <p>Write some stuff here</p>
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