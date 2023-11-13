import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const PanelControl = () => {
  return (
    <div>
      <h1>Panel de control</h1>
      <p>Elige una opcion</p>
      <nav>
        <ul>
            <li>
                <NavLink to='/panel/inicio'>Inicio</NavLink>
            </li>
            <li>
                <NavLink to='/panel/crear-articulos'>Crear Articulo</NavLink>
            </li>
            <li>
                <NavLink to='/panel/gestion-usuarios'>Gestion usuarios</NavLink>
            </li>
            <li>
                <NavLink to='/panel/acerca-de'>Acerca de</NavLink>
            </li>
        </ul>
      </nav>
      {/* ACA SE CARGAN LOS COMPONENTES DE LAS RUTAS ANIDADAS */}
      <Outlet ></Outlet>

    </div>
  )
}

export default PanelControl
