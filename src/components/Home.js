// Home.js
import React from 'react';
import '../App.css'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function Home() {
    return <div className='home'>
            
           <h1>Home Page</h1>
           <ImageSlider slides={SliderData}/>
            
           </div>
}

export default Home;
