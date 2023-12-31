import React from 'react';

import StopWatch from './StopWatch';

import list_icon from '../assets/list.png';
import coin_icon from '../assets/coin_icon.png';
import calendar from '../assets/calendar.svg';
import calendar_2 from '../assets/calendar_2.svg';

import '../styles/card.scss';
import { TaskContext } from '../context/TaskContext';
import Modal from './Modal';

const Card = ({ item }) => {
  const { fetchData } = React.useContext(TaskContext);

  const data = Date(item.created_at);
  let dia = data.toString().slice(8, 11);
  let mes = data.toString().slice(4, 7);
  let ano = data.toString().slice(10, 16);

  const [isOpen, setIsOpen] = React.useState(false);

  const [isOpenWatch, setIsOpenWatch] = React.useState(false);

  return (
    <>
      {isOpenWatch ? (
        <StopWatch
          time={item.expected_duration}
          isOpenWatch={isOpenWatch}
          closeWatch={(refresh = false) => {
            if (refresh) {
              fetchData();
            } else {
              setIsOpenWatch(false);
            }
          }}
          id={item.id}
        />
      ) : null}

      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} type={'task'} item={item} />

      <div className="card-container">
        <div className="card-header">
          <h4>{item.title}</h4>
          <span className="clickable" onClick={() => setIsOpen(true)}>
            <img src={calendar} alt="edit" />
          </span>
        </div>
        <div className="card">
          <div className="card-left">
            <img src={list_icon} alt="list_icon" />
          </div>
          <div className="card-right">
            <div className="card-body">
              <h4>{item.description}</h4>
              <span className="card-text">
                <img src={coin_icon} alt="coin_icon" />
                Moedas:
                <p className="text-value">{item.coin_reward}</p>
              </span>
              <span className="card-text">
                <img src={calendar_2} alt="" />
                Criado em: <p className="text-value">{`${dia} de ${mes} ${ano}`}</p>
              </span>
              <span className="card-text">
                Status:<p className="status-value">{item.finished ? 'Finalizado' : 'Fazer'}</p>
              </span>
              {!item.finished ? (
                <button onClick={() => setIsOpenWatch(true)}>INICIAR</button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
