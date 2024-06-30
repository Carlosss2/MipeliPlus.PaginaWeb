import React, { useState } from 'react';
import '../App.css';
import Header from '../Componentes/Atoms/Header/Header.jsx';
import Footer from '../Componentes/Atoms/Footer/Footer.jsx';
import Contenido from '../Componentes/Atoms/Contenido/Contenido.jsx';

function PageAnimada() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Contenido />
      <Footer />
    </>
  );
}

export default PageAnimada;
