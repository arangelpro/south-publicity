import React from 'react';

import '../styles/components/TeamHome.scss';
import ImgPerfil from '../assets/imagen1.png';

import wave from '../assets/wave_3.svg';

const TeamHome = () => (
  <section id="team" className="TeamHome">  
    <img src={wave} alt="" />  
    <div className="container">
      <h2 className="title-section">Equipo</h2>
      <div className="TeamHome-details">
        <div className="TeamHome-detail">
          <div className="TeamHome-detail-img">
            <img
              src={ImgPerfil}
              alt="Anthony Rangel"
            />
          </div>
          <h4 className="TeamHome-detail-perfil">Jefe de Desarrollo</h4>
        </div>
        <div className="TeamHome-detail">
          <div className="TeamHome-detail-img">
            <img
              src={ImgPerfil}
              alt="Anthony Rangel"
            />
          </div>
          <h4 className="TeamHome-detail-perfil">Jefe de Desarrollo</h4>
        </div>
        <div className="TeamHome-detail">
          <div className="TeamHome-detail-img">
            <img
              src={ImgPerfil}
              alt="Anthony Rangel"
            />
          </div>
          <h4 className="TeamHome-detail-perfil">Jefe de Desarrollo</h4>
        </div>
        <div className="TeamHome-detail">
          <div className="TeamHome-detail-img">
            <img
              src={ImgPerfil}
              alt="Anthony Rangel"
            />
          </div>
          <h4 className="TeamHome-detail-perfil">Jefe de Desarrollo</h4>
        </div>
      </div>					
    </div>
  </section>
);

export default TeamHome;