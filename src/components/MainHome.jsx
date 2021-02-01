import React from 'react';
import '../styles/components/MainHome.scss';

import Ilustration from '../assets/ilustration.svg';
import Growth from '../assets/growth.png';
import Neon from '../assets/neon.png';

const MainHome = () => (
  <section className="MainHome">
    <div className="container">
      <div className="MainHome-info">
        <h1 className="MainHome-info-title">Crece más, Vende más</h1>
        <h2 className="MainHome-info-subtitle">
          Que el reconocimiento de tu marca solo se limite a tus ganas de
          crecer.
        </h2>
        <p className="MainHome-info-description">
          Te ayudamos y te guiamos en cualquier etapa de tu proyecto o
          empresa, Seremos tu brújula en los Negocios Online y
          tradicionales.
        </p>
      </div>
      <div className="MainHome-image">
        <img
          className="MainHome-image_ilustration"
          src={Ilustration}
          alt="Ilustracion"
        />
        <img
          className="MainHome-image_neon"
          src={Neon}
          alt="Neon"
        />
        <img
          className="MainHome-image_growth"
          src={Growth}
          alt="Growth"
        />
      </div>
    </div>
  </section>
);

export default MainHome;