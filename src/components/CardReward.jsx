import React from 'react';

import StopWatch from './StopWatch';

import check_icon from '../assets/check_icon.png';
import calendar from '../assets/calendar.svg';
import coin_icon from '../assets/coin_icon.png';
import clock from '../assets/clock.svg';
import { RewardContext } from '../context/RewardContext';
import { useAuth } from '../context/AuthContext';

const CardReward = ({ item }) => {
  const [isOpenWatch, setIsOpenWatch] = React.useState(false);

  const { userInfo } = useAuth();

  const { fetchData, searchReward } = React.useContext(RewardContext);
  console.log(searchReward);

  return (
    <>
      {isOpenWatch ? (
        <StopWatch
          isReward
          time={item.duration}
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
      <div className="card-container">
        <div className="card-header">
          <h4>{item.title}</h4>
          <span>
            <img src={calendar} alt="calendar" />
          </span>
        </div>
        <div className="card">
          <div className="card-left">
            <img src={check_icon} alt="list_icon" />
          </div>
          <div className="card-right">
            <div className="card-body">
              <span className="card-text">
                <img src={coin_icon} alt="coin_icon" />
                Moedas:
                <p className="text-value">{item.cost}</p>
              </span>
              <span className="card-text">
                <img src={clock} alt="coin_icon" />
                Tempo:
                <p className="text-value">{item.duration}</p>
              </span>
              <button
                onClick={() => {
                  if (parseInt(userInfo?.coins) < item.cost) {
                    alert('Você não tem moedas suficientes');
                  } else {
                    setIsOpenWatch(true);
                  }
                }}>
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardReward;
