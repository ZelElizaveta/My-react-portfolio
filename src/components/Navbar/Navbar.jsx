import './Navbar.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../IMG/logo/logo';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    };

    window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Logo/>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Главная</Link>
            </li>
            <li>
                <Link to='/projects'>Проекты</Link>
            </li>
            <li>
                <Link to='/about'>Обо мне</Link>
            </li>
            <li>
                <Link to='/contact'>Контакты</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? <FaTimes size={25} style={{color: "#fff"}}/> :
                <FaBars size={25} style={{color: "#fff"}}/>
            }  
        </div>
    </div>
  )
}

export default Navbar;