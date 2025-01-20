import React from 'react'
import {NavLink} from 'react-router-dom'


const Menu = () => {
  return (
    <nav className='menu'>
        <h2>CRUD</h2>
        <NavLink to="/user" className={({ isActive }) => (isActive ? "active-link" : "")}><p className='menu-option'>User</p></NavLink>
        <NavLink to="/family" className={({ isActive }) => (isActive ? "active-link" : "")}><p className='menu-option'>Family</p></NavLink>
        <br />
    </nav>
  )
}

export default Menu