import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroImgContact from '../components/HeroImgContact/HeroImgContact';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <>
      <Navbar/>
      <HeroImgContact
        heading="Контакты"
        text="Скорее пишите мне и начнем наше сотрудничество"
      />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact;