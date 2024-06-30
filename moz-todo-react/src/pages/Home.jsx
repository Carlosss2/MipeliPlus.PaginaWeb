import React, { useState } from 'react';

import Header from "../Componentes/Atoms/Header/Header.jsx";
import Body from '../Componentes/Atoms/Body/Body.jsx';
import Footer from '../Componentes/Atoms/Footer/Footer.jsx';
//import Contenido from '../Componentes/Atoms/Contenido/Contenido.jsx';
function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default Home;
