import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Servicios from '../components/Servicios';
import Portafolio from '../components/Portafolio';
import Curriculum from '../components/Curriculum';
import Contacto from '../components/Contacto';
import Error from '../components/Error';
import HeaderNav from '../components/layout/HeaderNav';
import Footer from '../components/layout/Footer';




const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGACION */}
      <HeaderNav></HeaderNav>

      {/* CONTENIDO CENTRAL */}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to={'/inicio'}></Navigate>}></Route>
          <Route path='/inicio' element={<Inicio/>}></Route>
          <Route path='/portafolio' element={<Portafolio/>}></Route>
          <Route path='/servicios' element={<Servicios/>}></Route>
          <Route path='/curriculum' element={<Curriculum/>}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </section>

      {/* FOOTER */}
      <Footer></Footer>

    </BrowserRouter>
  )
}

export default MisRutas
