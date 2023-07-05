import { NavLink } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

import tasks_filled from '../assets/tasks_solid.svg';
import icon from '../assets/icon.png';
import reward_filled from '../assets/reward_filled.svg';

import '../styles/sidenav.scss';

const SideNav = ({ isOpenNav, closeNav }) => {
  const { loginResponse, setLoginResponse, deleteSession } = useAuth();

  if (isOpenNav) {
    return (
      <div className="sidenav">
        <span className="closebtn" onClick={closeNav}>
          <i className="bi bi-x-lg"></i>
        </span>
        <span className="nav-logo">
          <img src={icon} alt="" />
          <h4>Rewad Yourself</h4>
        </span>

        <div className="avatar">
          <i className="bi bi-person-circle"></i>
          <span>{loginResponse?.name}</span>
        </div>

        <span className="link">
          <NavLink
            to="/recompensas"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <img src={reward_filled} alt="img" />
            <span>Recompensas</span>
          </NavLink>
        </span>

        <span className="link">
          <NavLink to="/tarefas" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <img src={tasks_filled} alt="img" /> <span>Tarefas</span>
          </NavLink>
        </span>

        <span className="link">
          <NavLink
            onClick={() => deleteSession()}
            to="/login"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <i className="bi bi-box-arrow-left"></i>
            <span>Sair</span>
          </NavLink>
        </span>
      </div>
    );
  }
  return <></>;
};

export default SideNav;
