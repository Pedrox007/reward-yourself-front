import { createContext, useState } from "react";

export const TaskContext = createContext()

export const TaskProvider =({children})=>{
    const [tasks,setTasks] =useState([])
    const [data,setData]=useState({})
    const [isOpenNav,setIsOpenNav]=useState(false)

    function handleChange(e){
        const id = e.target.id
        const value = e.target.value
        setData(values=> ({...values,[id]:value}))
      }
    
      function handleDelete(tarefa){
        setTasks(tasks.filter(task => task.tarefa !== tarefa))
      }
  
      function sendData(){
        setTasks([...tasks,data])
        setData({})
      }
      const openNav=()=>setIsOpenNav(true) 
      const closeNav=()=>setIsOpenNav(false)

    return (
        <TaskContext.Provider value={{ tasks, setTasks,handleChange,data,
        setData,sendData,openNav,closeNav,isOpenNav }}>
          {children}
        </TaskContext.Provider>
      );
} 