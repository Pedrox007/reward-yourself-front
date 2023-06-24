import { NavLink } from "react-router-dom"
import '../styles/sidenav.scss'
import tasks_filled from '../assets/tasks_solid.svg'
import icon from '../assets/icon.png'
import reward_filled from '../assets/reward_filled.svg'

const SideNav = ({isOpenNav,closeNav}) => {
  
if(isOpenNav){
  return (
    <div className="sidenav">
          <span className="closebtn" onClick={closeNav}>
            <i  className="bi bi-x-lg"></i>
          </span>
          <span className="nav-logo"><img src={icon} alt="" /><h4>Rewad Yourself</h4></span>
        <div className="avatar">
            <i className="bi bi-person-circle"></i>
            <span>nome</span>
        </div>

       <span className="link">
       
         <NavLink  to='/recompensas'
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <img src={reward_filled} alt="img" />
            <span>Recompensas</span>
          </NavLink> 
       </span>
       <span className="link">
         <NavLink  to='/tarefas'className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
         <img src={tasks_filled} alt="img" /> <span>Tarefas</span></NavLink> 
       </span>      
    </div>
  )}
  return<></>
}

export default SideNav