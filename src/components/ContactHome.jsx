import React from 'react';

import '../styles/components/ContactHome.scss';
import wave from '../assets/wave_4.svg';

const ContactHome = () => (
  <section id="contact" className="ContactHome">    
    <div className="container">
      <h2 className="title-section">Contáctanos</h2>
      <div className="ContactHome-content">
        <p>
          ¿quieres servicios personalizados y especificos? hablanos por
          whatsapp o correo electronico          
        </p>
        <div className="ContactHome-content-actions">
          <a href="#contact" className="btn phone">
            <i className="fab fa-whatsapp" />
            {' '}
            Whatsapp
          </a>
          <a href="#contact" className="btn email">
            <i className="far fa-envelope" />
            {' '}
            Correo Electronico
          </a>
        </div>
      </div>
    </div>
    <img src={wave} alt="" />
  </section>
);

export default ContactHome;