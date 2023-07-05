import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { RewardContext } from '../context/RewardContext';
import Form from './Form';
import '../styles/modal.scss';

const op1 = [
  { label: 'Tarefa', name: 'tarefa', type: 'text' },
  { label: 'Tempo', name: 'tempo', type: 'number' },
  { label: 'Custo', name: 'custo', type: 'number' },
  { label: 'Descrição', name: 'descricao', type: 'textarea' }
];

const op2 = [
  { label: 'Recompensa', name: 'recompensa', type: 'text' },
  { label: 'Tempo (00:00)', name: 'tempo', type: 'number' },
  { label: 'Custo', name: 'custo', type: 'number' },
  { label: 'Descrição', name: 'descricao', type: 'textarea' }
];

const Modal = ({ isOpen, closeModal, type }) => {
  const context = type == 'task' ? TaskContext : RewardContext;
  const inputs = type == 'task' ? op1 : op2;

  const { sendData, handleChange } = useContext(context);

  if (isOpen) {
    return (
      <>
        <div className="modal">
          <div className="form-conteiner">
            <div className="modal-header">
              <i onClick={closeModal} className="bi bi-x-lg"></i>
            </div>

            <Form
              inputs={inputs}
              closeModal={closeModal}
              sendData={sendData}
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
