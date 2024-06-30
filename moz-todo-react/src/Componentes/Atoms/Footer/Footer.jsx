import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Sobre Nosotros</h3>
            <p>Tu mejor opción para ver películas de la mejor calidad.</p>
          </div>
          <div className="footer-section links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#movies">Películas</a></li>
              <li><a href="#contact">Contacto</a></li>
              <li><a href="#about">Sobre Nosotros</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contacto</h3>
            <p>Email: contacto@peliplus.com</p>
            <p>Teléfono: +123 456 7890</p>
            <p>Dirección: Calle Falsa 123, Ciudad, País</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 PeliPlus. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
