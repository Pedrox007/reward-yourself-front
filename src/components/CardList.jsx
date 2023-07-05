import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { RewardContext } from '../context/RewardContext';
import Card from './Card';
import CardReward from './CardReward';
import Empty from './Empyt';

const CardList = ({ type }) => {
  const context = type == 'task' ? TaskContext : RewardContext;

  const CardType = type == 'task' ? Card : CardReward;

  let temp = useContext(context);

  let list = [];

  if (type == 'task') {
    list = [...temp.tasks];
  } else {
    list = [...temp.rewards];
  }

  if (temp.loadingFetch) {
    return (
      <div className="spin-container">
        <div className="spin">
          <i className="bi bi-arrow-clockwise" style={{ fontSize: 50 }} />
        </div>
      </div>
    );
  }

  if (list.length == 0) {
    return <Empty type={type} />;
  } else {
    return (
      <>
        <ul className="card-list">
          {list.map((item, index) => {
            return (
              <li key={index}>
                <CardType item={item} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default CardList;
