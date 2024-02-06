import { useEffect, useRef } from 'react'
import { useState } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-DJ.png'
import LogoOutline from '../../../assets/images/logo-outline.svg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  const [dAttribute, setDAttribute] = useState('');

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .fromTo(outlineLogoRef.current,
        {duration: 2, drawSVG: '0%'},
        {duration: 2, drawSVG: '60%'},
        'start')

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  const fetchSVG = async () => {
    try {
      const response = await fetch(LogoOutline); // Assuming LogoOutline is the path to your SVG file
      const svgText = await response.text();
      
      // Create a dummy DOM element to parse the SVG
      const dummyDiv = document.createElement('div');
      dummyDiv.innerHTML = svgText;
      
      // Extract the 'd' attribute from the path element
      const pathElement = dummyDiv.querySelector('path');
      const dAttribute = pathElement.getAttribute('d');
      
      // Use dAttribute as needed
      setDAttribute(dAttribute);
      console.log('dAttribute:', dAttribute);
    } catch (error) {
      console.error('Error fetching or parsing SVG:', error);
    }
  };

  useEffect(() => {
    fetchSVG();
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="400pt"
        height="400pt"
        version="1.1"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d={dAttribute}/>
            </g>
      </svg>
    </div>
  )
}

export default Logo