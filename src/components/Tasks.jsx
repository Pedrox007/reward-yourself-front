import React, { useState } from 'react'
import Layout from './Layout'
import CardList from './CardList'
import Modal from './Modal'
import '../styles/main.scss'

const Tasks = () => {
  const [tasks,setTasks]=useState([])
  const [isOpen,setIsOpen]=useState(false)

  function openModal(){
    setIsOpen(true)
  }
  function closeModal(){
    setIsOpen(false)
  }
  return (
    <div>
      <Layout>
        <Modal isOpen={isOpen} closeModal={closeModal}/>
        <div className='title-task'>
          <h1>Suas Tarefas</h1> <button onClick={openModal}><i className="bi bi-plus-circle"></i></button>
        </div>       
        <CardList tasks={tasks}/> 
      </Layout>
    </div>
  )
}
export default Tasks