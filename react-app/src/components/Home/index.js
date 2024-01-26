import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo-DJ.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['D', 'u', 's', 't', 'i', 'n', ' ' , 'A', 'l', 'd', 'a', 'n', 'a']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

    useEffect   (() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 4000)
    }
    , [])

    return (
        <div className="container home-page">
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br /> 
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m</span> 
                <img src={logo } alt="logo" /><br />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={29}/>
                <br />
                </h1>
                <h2>What I do / blah blah</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home