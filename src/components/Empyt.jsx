import React from 'react';

import empty_list from '../assets/empy_list.png';
import reward_empty from '../assets/empty_reward.png';

import '../styles/empty.scss';

const Empty = ({ type }) => {
  const src = type == 'task' ? empty_list : reward_empty;
  const p =
    type == 'task' ? (
      <div>
        <p style={{ fontWeight: 'bold', marginBottom: 30 }}>Nenhuma tarefa encontrada!</p>
        <p>
          Cadastre suas atividades diárias para ganhar moedas e poder alcançar o merecido descanso e
          lazer.
        </p>
      </div>
    ) : (
      <div>
        <p style={{ fontWeight: 'bold', marginBottom: 30 }}>Nenhuma recompensa encontrada!</p>
        <p>
          Cadastre suas recompensas e realize as tarefas para aproveitar seu merecido descanso e
          lazer.
        </p>
      </div>
    );
  return (
    <div className="empty-list">
      <img src={src} alt="empty" />

      <div className="overlay-empty">{p}</div>
    </div>
  );
};

export default Empty;
