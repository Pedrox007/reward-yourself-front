import React,{useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import '../styles/navbar.scss'
import coins_img from '../assets/coins.png'
import icon from '../assets/icon.png'

 const NavBar = ({coins}) => {
  const {isOpenNav,openNav} = useContext(TaskContext)
  return (
    <>
    <nav className='navbar'>
        <ul>
          <li><span className='menu-icon' onClick={openNav}><i className="bi bi-list "></i></span>
          <img src={icon} alt="" />
          <span className='nav-logo'>Reward Yourself</span>
          </li>
          <li >
         
            <div className="input-block">
              <label htmlFor="search" >Filtrar</label>
              <input type="search" placeholder='Digite a tarefa que deseja realizar' id="search" />
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