import React, { useState } from 'react';
import Layout from '../components/Layout';
import CardList from '../components/CardList';
import Modal from '../components/Modal';
import { TaskProvider } from '../context/TaskContext';
import '../styles/main.scss';

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <TaskProvider>
      <Layout type={'task'}>
        <Modal isOpen={isOpen} closeModal={closeModal} type={'task'} />

        <div className="title-task">
          <h1>Suas Tarefas</h1>
          <button onClick={openModal}>
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>

        <CardList type={'task'} />
      </Layout>
    </TaskProvider>
  );
};
export default Tasks;
