import React, {useState, useEffect, useRef} from 'react';
import { Link, animateScroll as scroll} from "react-scroll";

import Logo from '../assets/logo.svg';
import LogoTitle from '../assets/logo_title.svg';

import '../styles/components/Header.scss';

import Icon from './Icon';

const Header = () => { 
  const [iconMenu, setIconMenu] = useState("fas fa-bars");
  const [showMenu, setShowMenu] = useState(false);

  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (window.pageYOffset >= 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [])
  const handleClickMenu = () => {    
    const icon = !showMenu ? "fas fa-times" : "fas fa-bars";
    setIconMenu(icon);
    setShowMenu(!showMenu);
  }

  const handleClickMenuItem = () => {    
    if(showMenu) {
      setIconMenu("fas fa-bars");
      setShowMenu(false);
    }    
  }
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className={`Header${isSticky ? ' sticky' : ''}`} ref={ref}>
      <nav className="Header-nav">
        <Link to="/" onClick={scrollToTop} className="Header-nav-brand">
          <div className="Header-nav-brand-image">
            <img src={Logo} alt="Logo" loading="lazy" />
          </div>
          <div className="Header-nav-brand-description">
            <div className="container">
              <img src={LogoTitle} alt="South Publicity" />
            </div>
          </div>
        </Link>
        <button
          className={`Header-nav-toggle${showMenu ? " overlap" : ""}`}
          type="button"
          onClick={handleClickMenu} 
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon icon={iconMenu} />
        </button>
        <div className={`Header-nav-collapse${showMenu ? " show" : " collapse"}`} id="navbar">
          <ul className="Header-nav-navbar">
            <li>
              <Link 
                activeClass="active"
                spy
                smooth
                offset={-70}
                duration={500}
                to="service" 
                onClick={handleClickMenuItem}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                activeClass="active"
                spy
                smooth
                offset={-70}
                duration={500}
                to="about" 
                onClick={handleClickMenuItem}
              >
                Conócenos
              </Link>
            </li>
            <li>
              <Link 
                activeClass="active"
                spy
                smooth
                offset={-70}
                duration={500}
                to="team" 
                onClick={handleClickMenuItem}
              >
                Equipo
              </Link>
            </li>
            <li>
              <Link 
                activeClass="active"
                spy
                smooth
                offset={-70}
                duration={500}
                to="contact" 
                onClick={handleClickMenuItem}
              >
                Contácto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
