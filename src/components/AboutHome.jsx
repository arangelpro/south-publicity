import React from 'react';

import '../styles/components/AboutHome.scss';
import wave from '../assets/wave_2.svg';

const AboutHome = () => (
  <section id="about" className="AboutHome">
    <img src={wave} alt="" />
    <div className="container">
      <h2 className="title-section">Conócenos</h2>
      <div className="AboutHome-content">
        <p>
          South Publicity no es solo una agencia de Marketing Digital, más
          bien es lo que alguien podría definir como una Plataforma Guía.
          <br />
          <br />
          Enfocada a rescatar todos los conocimientos y herramientas
          necesarias para entregarlas en manos de empresas y marcas
          Socialmente Responsables y que busquen satisfacer de manera genuina
          las necesidades de sus clientes. 
          <br />
          <br />
          Porque estamos comprometidos con el crecimientos de tus proyectos y empresas, con el emprendimiento
          y con la generacion de empleos, porque South Publicity vive por
          apoyarte en cualquier etapa en la que estés se parte de una
          plataforma única.
        </p>
      </div>
    </div>
  </section>
);

export default AboutHome;