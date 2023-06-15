import React from 'react'
import '../styles/navbar.scss'

 const NavBar = () => {
  return (
    <>
    <nav className='navbar'>
        <ul>
          <li><span className='menu-icon'><i className="bi bi-list "></i></span></li>
          <li>
            <div className="input-block">
              <label htmlFor="search" >Filtrar</label>
              <input type="search" placeholder='Digite a tarefa que deseja realizar' />
          </div>
              <div className="search"><i className="bi bi-search"></i></div>
          </li>
          <li></li>
        </ul>
    </nav>
    </>
  )
}
export default NavBar;