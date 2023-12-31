import React, { createContext, useState } from 'react';
import { useAuth } from './AuthContext';
import { RewardService } from '../service/Reward.service';

export const RewardContext = createContext();

export const RewardProvider = ({ children }) => {
  const [rewards, setRewards] = useState([]);
  const [data, setData] = useState({});

  const [loadingFetch, setLoadingFetch] = useState(false);

  const { loginResponse } = useAuth();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setData((values) => ({ ...values, [name]: value }));
  }

  function handleDelete(tarefa) {
    setRewards(rewards.filter((reward) => reward.tarefa !== tarefa));
  }

  async function fetchData(term) {
    setLoadingFetch(true);
    try {
      const response = await RewardService(loginResponse).get(term);
      setRewards(response.data.results);
    } catch (error) {
      console.log(error);
      console.log('Erro ao obter recompensas');
    } finally {
      setLoadingFetch(false);
    }
  }

  async function sendData(isEdit) {
    if (isEdit) {
      const res = await RewardService(loginResponse).edit(isEdit, {
        title: data.recompensa,
        description: data.descricao,
        duration: data.tempo,
        cost: data.custo
      });
      setData({});
      fetchData('');
    } else {
      const res = await RewardService(loginResponse).create(
        data.recompensa,
        data.descricao,
        data.tempo,
        data.custo
      );

      setRewards([...rewards, { ...res.data }]);
      setData({});
    }
  }

  async function deleteData(id) {
    const res = await RewardService(loginResponse).del(id);
    setData({});
    fetchData('');
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <RewardContext.Provider
      value={{
        rewards,
        data,
        setRewards,
        handleChange,
        setData,
        sendData,
        loadingFetch,
        setLoadingFetch,
        fetchData,
        deleteData
      }}>
      {children}
    </RewardContext.Provider>
  );
};
