import './HeroImgAbout.css'; 
import '../HeroImgProjects/HeroImgProjects.css';
import React from 'react';

const HeroImgAbout = (props) => {
    const {heading, text} = props;
  return (
    <div className='hero-img-about'>
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImgAbout