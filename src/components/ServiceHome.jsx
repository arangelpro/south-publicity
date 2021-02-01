import React from 'react';

import '../styles/components/ServiceHome.scss';

const ServiceHome = () => (
  <section id="service" className="ServiceHome">
    <div className="container">
      <h2 className="title-section">Servicios</h2>
      <div className="ServiceHome-content">
        <div className="ServiceHome-content-card">
          <h3>Crecimiento en Redes</h3>
          <p>
            ¿Tienes Redes Sociales? ¿Cómo te encuentran en Google? Queremos
            que tus clientes te encuentren fácilmente, sin escarbar entre
            los resultados de busqueda en las redes en General
          </p>
        </div>

        <div className="ServiceHome-content-card">
          <h3>Marketing Online</h3>
          <p>
            Hoy está en boca de todos, y sí es así es ¡porque funciona! no
            te quedes fuera y alcanza más clientes efectivos para tu
            empresa.
          </p>
        </div>
        <div className="ServiceHome-content-card">
          <h3>Asesorias Estrategicas</h3>
          <p>
            Porque no puede haber una gran estructura sin una sólida base,
            adquiere todos los conocimientos necesarios y útiles para llevar
            tu negocio sin perder el tiempo en lo demás nosotros te apoyamos
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceHome;