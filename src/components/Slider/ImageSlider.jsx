import React, {useState} from 'react'
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;



    return(
        <div className="slider">
            <div className="prev" />
            <div className="next" />
           {SliderData.map((slide, index) => {
               return <img src={slide.image} alt={slide.description}/>
           })} 

        </div>
            
        
    )
}

export default ImageSlider;