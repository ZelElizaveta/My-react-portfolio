import './HeroImg.css';
import Bg from '../../IMG/IMG/BG-hero.jpg';

import React from 'react'
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className='into-image' src={Bg} alt="into" />
        </div>
        <div className="content">
            <p>Привет! Mеня зовут Елизавета</p>
            <h1>Я веб-разработчик</h1>
            <div>
                <Link to='/projects' className='btn'>Проекты</Link>
                <Link to='/contact' className='btn btn-light'>Контакты</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg