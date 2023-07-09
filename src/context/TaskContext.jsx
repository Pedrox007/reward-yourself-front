import React, { createContext, useState } from 'react';
import { TaskService } from '../service/Task.service';
import { useAuth } from './AuthContext';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState({});

  const [loadingFetch, setLoadingFetch] = useState(false);

  const { loginResponse } = useAuth();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setData((values) => ({ ...values, [name]: value }));
  }

  function handleDelete(tarefa) {
    setTasks(tasks.filter((task) => task.tarefa !== tarefa));
  }

  async function fetchData(term) {
    setLoadingFetch(true);
    try {
      const response = await TaskService(loginResponse).get(term);
      setTasks(response.data.results);
    } catch (error) {
      console.log(error);
      console.log('Erro ao obter tarefas');
    } finally {
      setLoadingFetch(false);
    }
  }

  async function sendData(isEdit) {
    if (isEdit) {
      const res = await TaskService(loginResponse).edit(isEdit, {
        title: data.tarefa,
        description: data.descricao,
        expected_duration: data.tempo,
        coin_reward: data.custo,
        fixed: 'fixado' in data
      });
      setData({});
      fetchData('');
    } else {
      const res = await TaskService(loginResponse).create(
        data.tarefa,
        data.descricao,
        data.tempo,
        null,
        data.custo,
        'fixado' in data,
        false
      );

      setTasks([...tasks, { ...res.data }]);
      setData({});
    }
  }

  async function deleteData(id) {
    const res = await TaskService(loginResponse).del(id);
    setData({});
    fetchData('');
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        data,
        setTasks,
        handleChange,
        setData,
        sendData,
        loadingFetch,
        setLoadingFetch,
        fetchData,
        deleteData
      }}>
      {children}
    </TaskContext.Provider>
  );
};
