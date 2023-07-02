import React from 'react';
import '../styles/empty.scss';
import empty_list from '../assets/empy_list.png';
import reward_empty from '../assets/empty_reward.png';

const Empty = ({ type }) => {
  const src = type == 'task' ? empty_list : reward_empty;
  const p =
    type == 'task' ? (
      <p>
        Cadastre suas atividades diárias para ganhar moedas e poder alcançar o merecido descanso e
        lazer.
      </p>
    ) : (
      <p>
        Não há nenhuma recompensa cadastrada. Cadastre-as e realize as tarefas para aproveitar seu
        merecido descanso e lazer.
      </p>
    );
  return (
    <div className="empty-list">
      <img src={src} alt="empty" />

      <div className="overlay-empty">{p}</div>
    </div>
  );
};

export default Empty;
