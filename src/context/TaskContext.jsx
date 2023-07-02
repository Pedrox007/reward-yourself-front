import { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
    console.log(data);
  }

  function handleDelete(tarefa) {
    setTasks(tasks.filter((task) => task.tarefa !== tarefa));
  }

  function sendData() {
    setTasks([...tasks, data]);
    setData({});
  }

  return (
    <TaskContext.Provider value={{ tasks, data, setTasks, handleChange, setData, sendData }}>
      {children}
    </TaskContext.Provider>
  );
};
