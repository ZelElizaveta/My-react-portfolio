import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroImgProjects from '../components/HeroImgProjects/HeroImgProjects';
import PricingCard from '../components/PricingCard/PricingCard';
import Work from '../components/WorkCard/Work';


const Projects = () => {
  return (
    <>
      <Navbar/>
      <HeroImgProjects 
        heading="Мои проекты"
        text="Здесь вы можете познакомиться с моими проектами"
      />
      <Work/>
      <PricingCard/>
      <Footer/>
    </>
  )
}

export default Projects