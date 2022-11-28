import React from 'react'
import logo from "../../Assets/logo_tienda.png"
import {style} from './Navbar.styles'
import {categorias} from './Navbar.categorias'
import {CartWidget} from './CartWidget';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <header style={style.container}>
      <Link to="/" style={style.imagen}>
      <img src={logo} alt="tienda online" style={style.imagen} />
      </Link>
      <h1>.</h1>
      <nav>
        {
          categorias.map((categoria)=>{
            return <NavLink 
            key={categoria.id} 
            style={style.categorias} 
            to={categoria.ruta}>
              {categoria.nombre}
            </NavLink>
          })
        }
      </nav>
      <Link to="/cart">
      <CartWidget/>
      </Link>
    </header>
  )
}

export default Navbar



