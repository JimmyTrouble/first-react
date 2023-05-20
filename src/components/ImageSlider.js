import  React,{useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0);
const length = slides.length


  return (
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' />
        <FaArrowAltCircleRight className='right-arrow' />
    {slides.map((slide, index) => {

        return(
            <img src={slide.image} alt="img" className='image'/>
        )

    })}
    </section>
  )
}

export default ImageSlider
