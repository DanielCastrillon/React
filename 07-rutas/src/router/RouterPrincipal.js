import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import Inicio from '../components/Inicio'
import Articulos from '../components/Articulos'
import Contacto from '../components/Contacto'
import Error from '../components/Error'
import Persona from '../components/Persona'
import PanelControl from '../components/PanelControl'

import InicioPanel from '../components/panel/InicioPanel'
import Crear from '../components/panel/Crear'
import Gestion from '../components/panel/Gestion'
import Acerca from '../components/panel/Acerca'


const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <h2>Cabecera</h2>
    <hr/>
    <nav>
      <ul>
        <li>
          <NavLink 
            to={"/inicio"} 
            className={
              ({isActive}) =>{
              //console.log(datosNav) con la desestructuracion queda isActive
              return isActive?"activo":""
             }
             }>Inicio</NavLink>
        </li>
        <li>
          <NavLink 
            to={"/articulos"}
            className={
              ({isActive}) =>{
              //console.log(isActive)
              return isActive?"activo":""
             }
             }>Articulos</NavLink>
        </li>
        <li>
          <NavLink 
            to={"/contacto"}
            className={({isActive}) => isActive ? "activo" : ""}>Contacto
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={"/persona"}
            className={({isActive}) => isActive ? "activo" : ""}>Persona
          </NavLink>
        </li>
        <li>
          <NavLink to={"/panel"} className={({isActive}) => isActive ? "activo" : ""}>Panel</NavLink>
        </li>
      </ul>
    </nav>
        <Routes>
          {/* NAVEGACION PRINCIPAL */}
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route path='/articulos' element={<Articulos/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
            <Route path='/persona/:nombre/:apellido' element={<Persona/>}></Route>
            <Route path='/persona/:nombre' element={<Persona/>}></Route>
            <Route path='/persona' element={<Persona/>}></Route>
            <Route path={'/refirigir'} element={<Navigate to={''}/>}></Route>
             {/* NAVEGACION SUB RUTAS */}
            <Route path='/panel/*' element={<PanelControl/>}>
                <Route index element={<InicioPanel/>}></Route>
                <Route path='inicio' element={<InicioPanel/>}></Route>
                <Route path='crear-articulos' element={<Crear/>}></Route>
                <Route path='gestion-usuarios' element={<Gestion/>}></Route>
                <Route path='acerca-de' element={<Acerca/>}></Route>
            </Route>

            <Route path='*' element={<Error/>}></Route>
        </Routes>

    </BrowserRouter>
  )
}

export default RouterPrincipal
