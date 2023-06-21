import { Link } from "react-router-dom"
import {TaskContext} from '../context/TaskContext'
import '../styles/sidenav.scss'
import { useContext } from "react"

const SideNav = () => {
  const {isOpenNav,closeNav} = useContext(TaskContext)
  
if(isOpenNav){
  return (
    <div className="sidenav">
        <span className="closebtn" onClick={closeNav}>x</span>
        <div>
            <span></span>
            <span></span>
        </div>
        <Link  >Usuário</Link>
        <Link  to='/recompensas'>Recompensas</Link>
        <Link ></Link>
    </div>
  )}
  return<></>
}

export default SideNav