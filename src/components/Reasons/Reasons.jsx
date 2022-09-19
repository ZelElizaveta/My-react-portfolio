import "./Reasons.css";
import Reason from '../../IMG/IMG/reasons.jpg';


import React from 'react';


const Reasons = () => {
  return (
    <div className="reasons">
        <h1 className="reasons-title">Зачем вам и вашему бизнесу необходим сайт?</h1>
        <div className="reasons-content">
            <div className="reasons-text">
                <div className="reasons-img">
                    <img  src={Reason} alt="reasons" />
                </div>
                <div className="reasons-list">
                    <div className="list">
                        <h4>Преимущества</h4>
                        <li>Предприниматели, у которых есть стильный, оптимизированный сайт, всегда более конкурентоспособны</li>
                        <li>Сайт помогает создать имидж компании</li>
                        <li>Сайт позволяет рассказать о своем бизнесе или новом продукте большему количеству потенциальных клиентов.</li>
                        <li>Оптимизированный продающий сайт сэкономит рекламный бюджет, потому что клиенты сами будут находить вас в интернете.</li>
                        <li>Сайт — это возможность систематизировать важную информацию о вашем бизнесе: товары, преимущества, отзывы, цены, условия сотрудничества. </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons