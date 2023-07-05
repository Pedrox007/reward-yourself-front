import { useState } from 'react';
import Layout from '../components/Layout';
import CardList from '../components/CardList';
import Modal from '../components/Modal';
import { RewardProvider } from '../context/RewardContext';

const Rewards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const type = 'reward';
  return (
    <RewardProvider>
      <Layout type={'reward'}>
        <Modal isOpen={isOpen} closeModal={closeModal} />
        <div className="title-task">
          <h1>Suas Recompensas</h1>
          <button onClick={openModal}>
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
        <CardList type={type} />
      </Layout>
    </RewardProvider>
  );
};

export default Rewards;
