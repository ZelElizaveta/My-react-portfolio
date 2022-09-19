import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroImgAbout from '../components/HeroImgAbout/HeroImgAbout';
import AboutContent from '../components/AboutContent/AboutContent';


const About = () => {
  return (
    <>
      <Navbar/>
      <HeroImgAbout
        heading="Обо мне"
        text="Ваш дружелюбный Frontend разработчик"
      />
      <AboutContent/>
      <Footer/>
    </>
  )
}

export default About