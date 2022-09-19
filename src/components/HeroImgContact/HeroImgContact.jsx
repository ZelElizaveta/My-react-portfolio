import './HeroImgContact.css';
import '../HeroImgProjects/HeroImgProjects.css';
import React from 'react';

const HeroImgContact = (props) => {
  const {heading, text} = props;
  return (
    <div className='hero-img-contact'>
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImgContact