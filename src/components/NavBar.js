import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaLaptopCode} from 'react-icons/fa';

export const NavBar = () => {
    const [check, setCheck] = useState(false)

    const scrollToTop = () => {
        window.scroll({
            top:0,
            left:0,
            behavior: 'smooth'
        })
    }

    const handleClick = () => {
        setCheck(false)
    }

    const handleChange = () => {
        setCheck(!check)
    }
    return(
        <div className='NavBar'>
            <FaLaptopCode className='codelogo' onClick={scrollToTop}/>
            <div className='checkmenu'>
                <label for = "a">
                    <GiHamburgerMenu />
                </label>
                <input type="checkbox" id = "a" checked = {check} onChange = {handleChange}/>
            </div>
            <ul style = {check ? {left: "0"} : {left: "-100%"}}>
                <li>
                    <Link to="Header" spy={true} smooth={true} offset={-60} onClick= {handleClick} duration={500}>Home </Link>
                </li>
                <li>
                    <Link to="About" spy={true} smooth={true} offset={-60} onClick = {handleClick} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="Projects" spy={true} smooth={true} offset={-60} onClick = {handleClick} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link to="TechnologyStack" spy={true} smooth={true} offset={-60} onClick = {handleClick} duration={500}>Tech Stack</Link>
                </li>
                <li>
                    <Link to="Contact" spy={true} smooth={true} offset={-60} onClick = {handleClick} duration={500}>Contact Me</Link>
                </li>
            </ul>
        </div>
    );
};
