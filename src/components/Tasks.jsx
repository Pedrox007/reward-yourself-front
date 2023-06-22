import React, { useState } from 'react'
import Layout from './Layout'
import CardList from './CardList'
import Card from './Card'
import Modal from './Modal'
import {TaskProvider} from '../context/TaskContext'
import '../styles/main.scss'



const Tasks = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [isOpenWatch,setIsOpenWatch]=useState(false)


  const openModal=()=>setIsOpen(true) 
  const closeModal=()=>setIsOpen(false)

  const openWatch=()=>setIsOpenWatch(true)
  const closeWatch=()=>setIsOpenWatch(false)

  const item={
    tarefa:"Bom dia",
    custo:10,
    tempo:10,
    status:"Não iniciado"
  }
  const type="task"
  return (

    <TaskProvider >  
        <Layout>
          <Modal isOpen={isOpen}
          closeModal={closeModal}
          type={type}/>
          <div className='title-task'>
            <h1>Suas Tarefas</h1>
            <button onClick={openModal}>
              <i className="bi bi-plus-circle">
            </i></button>
          </div>
   
          <CardList
          isOpenWatch={isOpenWatch}
          openWatch={openWatch}
          closeWatch={closeWatch}
          type={type}
          />
        </Layout>
      </TaskProvider>
  )
}
export default Tasks