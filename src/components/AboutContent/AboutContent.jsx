import './AboutContent.css';
import AboutMe from '../../IMG/IMG/AboutMe.jpg';

import React from 'react';
import { Link } from 'react-router-dom';
import Skills from './Skills';

const AboutContent = () => {
  return (
    <>
        <div className='about'>
            <div className="left-about">
                <img src={AboutMe} alt="About" />
            </div>
            <div className="right-about">
                <h1>Кто я?</h1>
                <p>Я Frontend-разработчик. <br/> Я создаю красивые, функциональные, адаптивные web-сайты с современным дизайном. <br/>Сайт является лицом компании и одним из элементов престижа. <br/>Он также придает авторитет бизнесу и позволяет заявить о себе. <br/>Я помогу заявить о себе громко, ярко и со вкусом. </p>
                <Link to="/contact">
                    <button className='btn btn-about'>Написать</button>
                </Link>
            </div>
        </div>
        <Skills/>
    </>
  )
}

export default AboutContent