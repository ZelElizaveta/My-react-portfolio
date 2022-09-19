import './PricingCard.css';

import React from 'react'
import { Link } from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className='pricing'>
        <h1 className='price'>Прайс-лист</h1>
        <div className="card-container">
            <div className="card">
                <h3>- Сайт-визитка -</h3>
                <span className='bar'></span>
                <p className='btc'>от 15 000 руб.</p>
                <p> - 5 дней -</p>
                <p> Одностраничный сайт для презентации услуг или товаров</p>
                <p> - Адаптивный дизаин -</p>
                <Link to="/contact" className='btn btn-card'>Узнать подробнее</Link>
            </div>

            <div className="card">
                <h3>- Web-приложение -</h3>
                <span className='bar'></span>
                <p className='btc'>от 30 000 руб.</p>
                <p> - 15 дней -</p>
                <p> Одностраничное или многостраничное динамическое приложение внутри браузера</p>
                <p> - Адаптивный дизайн -</p>
                <p> - Возможна разработка логотипа и фирменного стиля сайта -</p>
                <Link to="/contact" className='btn btn-card'>Узнать подробнее</Link>
            </div>

            <div className="card">
                <h3>- Корпоративный сайт -</h3>
                <span className='bar'></span>
                <p className='btc'>от 50 000 руб.</p>
                <p> - 30 дней -</p>
                <p> Многостарничный сайт для компаний</p>
                <p> - Адаптивный дизайн -</p>
                <p> - Возможна разработка логотипа и фирменного стиля сайта -</p>
                <Link to="/contact" className='btn btn-card'>Узнать подробнее</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard