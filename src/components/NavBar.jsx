import React from 'react'
import '../styles/navbar.scss'
import coins_img from '../assets/coins.png'

 const NavBar = ({coins}) => {
  return (
    <>
    <nav className='navbar'>
        <ul>
          <li><span className='menu-icon'><i className="bi bi-list "></i></span></li>
          <li className='join'>
          <span className='nav-logo'>Reward Yourself</span>
            <div className="input-block">
              <label htmlFor="search" >Filtrar</label>
              <input type="search" placeholder='Digite a tarefa que deseja realizar' />
            </div>
            <div className="search"><i className="bi bi-search"></i></div>
          </li>
          <button className='coins-button'><img src={coins_img} alt="coins" />{coins}</button>
        </ul>
    </nav>
    </>
  )
}
export default NavBar;