import React, { useState } from 'react'
import Layout from './Layout'
import CardList from './CardList'
import Modal from './Modal'
import '../styles/main.scss'

const Tasks = () => {
  const [tasks,setTasks]=useState([])
  const [isOpen,setIsOpen]=useState(false)
  const [data,setData]=useState({})


  function handleChange(e){
    const id = e.target.id
    const value = e.target.value
    setData(values=> ({...values,[id]:value}))
  }
  function handleDelete(tarefa){
    setTasks(tasks.filter(task => task.tarefa !== tarefa))
  }
  function openModal(){
    setIsOpen(true) 
  }
  function closeModal(){
    setIsOpen(false)
  }
  function sendData(){
    setTasks([...tasks,data])
    setData({})
  }
  return (
    <div>
      <Layout>
        <Modal isOpen={isOpen} 
        handleChange={handleChange} 
        closeModal={closeModal} 
        sendData={sendData}/>
        <div className='title-task'>
          <h1>Suas Tarefas</h1> <button onClick={openModal}>
            <i className="bi bi-plus-circle"></i></button>
        </div>       
        <CardList tasks={tasks}/> 
      </Layout>
    </div>
  )
}
export default Tasks