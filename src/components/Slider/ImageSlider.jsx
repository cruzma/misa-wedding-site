import React, {useState} from 'react'
import { SliderData } from './SliderData';
import './slider-style.css';

const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return(
        <div className="slider">
            
            {SliderData.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt={slide.description} key={slide.id} className="image"/>
                        )}
                       
                    </div>
                ) 
                
            })} 
            <div className="prev" onClick={prevSlide}>&#10094;</div>
            <div className="next" onClick={nextSlide}>&#10095;</div>
        </div>
            
        
    )
}

export default ImageSlider;