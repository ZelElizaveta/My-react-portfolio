import './HeroImgNotFound.css';
import '../HeroImgProjects/HeroImgProjects.css';

import React from 'react'

const HeroImgNotFound = (props) => {
  const {heading, text} = props;
  return (
    <div className='hero-img-not-found'>
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImgNotFound