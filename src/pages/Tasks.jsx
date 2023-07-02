import React, { useState } from 'react';
import Layout from '../components/Layout';
import CardList from '../components/CardList';
import Modal from '../components/Modal';
import { TaskProvider } from '../context/TaskContext';
import '../styles/main.scss';

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWatch, setIsOpenWatch] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openWatch = () => setIsOpenWatch(true);
  const closeWatch = () => setIsOpenWatch(false);

  return (
    <TaskProvider>
      <Layout>
        <Modal isOpen={isOpen} closeModal={closeModal} type={'task'} />
        <div className="title-task">
          <h1>Suas Tarefas</h1>
          <button onClick={openModal}>
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
        <CardList
          isOpenWatch={isOpenWatch}
          openWatch={openWatch}
          closeWatch={closeWatch}
          type={'task'}
        />
      </Layout>
    </TaskProvider>
  );
};
export default Tasks;
