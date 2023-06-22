import { createContext, useState } from "react";

export const RewardContext = createContext()

export const RewardProvider =({children})=>{
    const [rewards,setRewards] =useState([])
    const [data,setData]=useState({})
    

    function handleChange(e){
        const id = e.target.id
        const value = e.target.value
        setData(values=> ({...values,[id]:value}))
      }
    
      function handleDelete(tarefa){
        setRewards(rewards.filter(reward => reward.tarefa !== tarefa))
      }
  
      function sendData(){
        setRewards([...rewards,data])
        setData({})
      }

    return (
        <RewardContext.Provider value={{ rewards,data, setRewards,handleChange,
        setData,sendData}}>
          {children}
        </RewardContext.Provider>
      );
} 