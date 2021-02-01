import React from 'react';

import '../styles/components/Footer.scss';

import LogoTitle from '../assets/logo_title.svg';

const Footer = () => (
  <footer className="Footer">
    <div className="container">
      <div className="Footer-content">
        <div className="Footer-about">
          <div className="Footer-about-info">
            <img src={LogoTitle} alt="South Publicity" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolore voluptate illum nobis nostrum vero impedit at. Illum accusantium maiores mollitia quas debitis cumque magnam alias nulla quidem amet? Perspiciatis!
            </p>
          </div>
          <div className="Footer-about-rrss">
            <a href="#facebook"><i className="fab fa-facebook-square" /></a>
            <a href="#instagram"><i className="fab fa-instagram-square" /></a>
            <a href="#youtube"><i className="fab fa-youtube-square" /></a>
            <a href="#tiktok"><i className="fab fa-tiktok" /></a>
            <a href="#linkedin"><i className="fab fa-linkedin" /></a>
          </div>						
        </div>
        <ul className="Footer-contact">
          <li className="Footer-contact-address">
            <h4>Dirección</h4>
            <h5>Av. Ohiggins 1650, Chillán, Chile</h5>								
          </li>
          <li className="Footer-contact-email">
            <h4>Email</h4>
            <h5>southpublicityofficial@gmail.com</h5>
          </li>
          <li className="Footer-contact-phone">
            <h4>Telefóno</h4>
            <h5>(+56) 9 4047 1242</h5>
          </li>
        </ul>
        <div className="Footer-copyright">
          <p>
            <i className="far fa-copyright" />
            {' '}
            2020 South Publicity Spa.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
