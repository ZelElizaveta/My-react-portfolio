import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroImgNotFound from '../components/HeroImgNotFound/HeroImgNotFound';

const NotFound = () => {
  return (
    <>
      <Navbar/>
      <HeroImgNotFound
        heading="Ошибка поиска"
        text="Такой страницы не существует"
      />
      <Footer/>
    </>
  )
}

export default NotFound