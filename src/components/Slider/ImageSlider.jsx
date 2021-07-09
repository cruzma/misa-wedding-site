import React, {useState} from 'react'
import { SliderData } from './SliderData';
import './slider-style.css';

const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;



    return(
        <div className="slider">
            <a className="prev">&#10094;</a>
            <a className="next">&#10094;</a>
           {SliderData.map((slide, index) => {
               return <img src={slide.image} alt={slide.description}/>
           })} 

        </div>
            
        
    )
}

export default ImageSlider;