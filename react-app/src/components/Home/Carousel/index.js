import './index.scss'
import { useState } from 'react'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Carousel = ( {data} ) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <div className="carousel">
            <FontAwesomeIcon icon={faArrowCircleLeft} className='arrow arrow-left' onClick={prevSlide}/>
            {data.map((item, idx) => {
                return (
                <img
                    src={item}
                    alt={item.alt}
                    key={idx}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                />
                );
            })}

            <FontAwesomeIcon icon={faArrowCircleRight} className='arrow arrow-right' onClick={nextSlide}/>
            <span className="indicators">
                {data.map((_, idx) => {
                return (
                    <button
                    key={idx}
                    className={
                        slide === idx ? "indicator" : "indicator indicator-inactive"
                    }
                    onClick={() => setSlide(idx)}
                    ></button>
                );
                })}
            </span>
        </div>
    );

};

export default Carousel;