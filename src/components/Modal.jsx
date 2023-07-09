import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { RewardContext } from '../context/RewardContext';
import Form from './Form';
import '../styles/modal.scss';

const op1 = [
  { label: 'Tarefa', name: 'tarefa', type: 'text', apiName: 'title' },
  { label: 'Tempo (00:00:00)', name: 'tempo', type: 'text', apiName: 'expected_duration' },
  { label: 'Custo', name: 'custo', type: 'number', apiName: 'coin_reward' },
  { label: 'Descrição', name: 'descricao', type: 'textarea', apiName: 'description' }
];

const op2 = [
  { label: 'Recompensa', name: 'recompensa', type: 'text', apiName: 'title' },
  { label: 'Tempo (00:00:00)', name: 'tempo', type: 'text', apiName: 'duration' },
  { label: 'Custo', name: 'custo', type: 'number', apiName: 'cost' },
  { label: 'Descrição', name: 'descricao', type: 'textarea', apiName: 'description' }
];

const Modal = ({ isOpen, closeModal, type, item }) => {
  const context = type == 'task' ? TaskContext : RewardContext;
  const inputs = type == 'task' ? op1 : op2;

  const { sendData, deleteData, handleChange } = useContext(context);

  if (isOpen) {
    return (
      <>
        <div className="modal">
          <div className="form-conteiner">
            <div className="modal-header">
              <i onClick={closeModal} className="bi bi-x-lg"></i>
            </div>

            <Form
              item={item}
              inputs={inputs}
              closeModal={closeModal}
              sendData={sendData}
              deleteData={deleteData}
              handleChange={handleChange}
            />
          </div>
        </div>
      </>
    );
  }
  return <></>;
};
export default Modal;
