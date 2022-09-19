import './Footer.css';
import { FaGithub, FaHome, FaMailBulk, FaPhone, FaTelegramPlane, FaVk, FaWhatsapp } from 'react-icons/fa'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome 
                        size={20} 
                        style={
                            {
                                color: "#fff",
                                marginRight: "2rem"
                            }
                        }
                    />
                    <div>
                        <p>Красноярск</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone 
                        size={20} 
                        style={
                            {
                                color: "#fff",
                                marginRight: "2rem"
                            }
                        }
                    />
                    <a href="tel:+79130474641">+7-913-047-46-41</a>
                    </h4> 
                </div>
                <div className="email">
                    <h4><FaMailBulk 
                        size={20} 
                        style={
                            {
                                color: "#fff",
                                marginRight: "2rem"
                            }
                        }
                    />
                    lizastepanova93@mail.ru
                    </h4> 
                </div>
            </div>
            <div className="right">
                <h4>Интересный факт обо мне</h4>
                <p>Я очень коммуникабельный человек, мы точно найдем общий язык!</p>
                <div className="social">
                    <a href="https://github.com/ZelElizaveta" target="_blank" rel="noopener noreferrer">
                        <FaGithub
                            size={30} 
                            style={
                                {
                                    color: "#fff",
                                    marginRight: "1rem"
                                }
                            }
                        />
                    </a>
                    <a href="https://vk.com/lstepanova93" target="_blank" rel="noopener noreferrer">
                        <FaVk
                            size={30} 
                            style={
                                {
                                    color: "#fff",
                                    marginRight: "1rem"
                                }
                            }
                        />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=79130474641" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp
                            size={30} 
                            style={
                                {
                                    color: "#fff",
                                    marginRight: "1rem"
                                }
                            }
                        />
                    </a>
                    <a href="https://t.me/Liza_Step" target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane
                            size={30} 
                            style={
                                {
                                    color: "#fff",
                                    marginRight: "1rem"
                                }
                            }
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer