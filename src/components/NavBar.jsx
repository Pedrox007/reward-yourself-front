import React, { useContext } from 'react';

import { useAuth } from '../context/AuthContext';
import { TaskContext } from '../context/TaskContext';
import { RewardContext } from '../context/RewardContext';

import coins_img from '../assets/coins.png';
import icon from '../assets/icon.png';

import '../styles/navbar.scss';

const NavBar = ({ openNav, type }) => {
  const { userInfo } = useAuth();

  const [search, setSearch] = React.useState('');

  const { fetchData } = React.useContext(type === 'reward' ? RewardContext : TaskContext);

  const handleSubmit = async (e) => {
    e?.preventDefault();

    fetchData(search);
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <span className="menu-icon" onClick={openNav}>
              <i className="bi bi-list "></i>
            </span>
            <img src={icon} alt="" />
            <span className="nav-logo">Reward Yourself</span>
          </li>
          <li>
            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="search">Filtrar</label>
                <input
                  type="search"
                  placeholder="Digite o título da sua pesquisa"
                  id="search"
                  value={search}
                  onChange={(e) => {
                    if (e.target.value === '') {
                      fetchData('');
                    }
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </form>
            <div className="search clickable" onClick={handleSubmit}>
              <i className="bi bi-search"></i>
            </div>
          </li>
          <button className="coins-button">
            <img src={coins_img} alt="coins" />
            {userInfo?.coins}
          </button>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
