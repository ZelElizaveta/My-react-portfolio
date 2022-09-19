import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroImg from '../components/HeroImg/HeroImg';
import Footer from '../components/Footer/Footer';
import Reasons from '../components/Reasons/Reasons';

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroImg/>
      <Reasons/>
      <Footer/>
    </>
  )
}

export default Home