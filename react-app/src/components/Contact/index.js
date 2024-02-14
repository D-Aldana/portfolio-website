import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer } from 'react-leaflet'
import ParticleBackground from './Particles'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect (() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000)
    }
    , []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ewx2yb8', 'template_i011knb', refForm.current, 'EG-yyWPvDv6mqhNYm')
        .then(
            () => {
                alert('Email sent successfully!');
                window.location.reload(false);
            },
            () => {
                alert('Email failed to send, try again.')
            }
        )
    };

    return (
        <>
            <div className="container contact-page">
                <ParticleBackground />
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}  idx={15}/>
                    </h1>

                    <p>
                    For inquiries regarding how my skills and experiences may contribute to your team, feel free to reach out to me via the form below or directly via email. 
                    </p>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' placeholder='Name' name='name' required/>
                                </li>

                                <li className='half'>
                                    <input type='email' placeholder='Email' name='email' required/>
                                </li>

                                <li>
                                    <input type='text' placeholder='Subject' name='subject' required/>
                                </li>

                                <li>
                                    <textarea placeholder='Message' name='message' required/>
                                </li>
                                <li>
                                    <input type='submit' className="flat-button" value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='info-map'>
                    Dustin Aldana
                    <br />
                    Victoria, BC,
                    <br />
                    Canada
                    <br />
                    <span>dustin.j.aldana@gmail.com</span>
                </div>

                <div className='map-wrap'>
                    <MapContainer center={[48.482479, -123.329570]} zoom={15}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact