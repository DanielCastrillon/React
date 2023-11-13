import React from 'react'
import { NavLink } from 'react-router-dom'


const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>D</span>
            <h3>Daniel Castrillon</h3>
        </div>
      <nav>
        <ul>
            <li>
                <NavLink 
                    className={({isActive}) => isActive ? "activo":""}
                    to={"/inicio"}>Inicio</NavLink>
            </li>
            <li>
                <NavLink
                    className={({isActive}) => isActive ? "activo":""} 
                    to={"/contacto"}>Contacto</NavLink>
            </li>
            <li>
                <NavLink 
                    className={({isActive}) => (isActive ? "activo":"")} 
                    to={"/curriculum"}>Curriculum</NavLink>
            </li>
            <li>
                <NavLink 
                    className={({isActive}) => (isActive ? "activo":"")} 
                    to={"/portafolio"}>Portafolio</NavLink>
            </li>
            <li>
                <NavLink 
                    className={({isActive})=>(isActive ? "activo":"")} 
                    to={"/servicios"}>Servicios</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderNav
