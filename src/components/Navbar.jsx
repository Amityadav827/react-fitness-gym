import React, { useState, useEffect} from 'react';
import { Link } from 'react-scroll'; 
import Logo from "../images/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to="main" className='logo' smooth={true} duration={1000}>
                <img src={Logo} alt='error' />
            </Link>

            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' for="menu-btn">
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to="main" smooth={true} duration={1000}>Home</Link></li>
                <li><Link to="features" smooth={true} duration={1000}>Features</Link></li>
                <li><Link to="presentaion" smooth={true} duration={1000}>Offers</Link></li>
                <li><Link to="about" smooth={true} duration={1000}>About Us</Link></li>
                <li><Link to="contact"smooth={true} duration={1000}>Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
