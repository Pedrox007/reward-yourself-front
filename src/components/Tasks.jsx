import React, { useState } from 'react'
import Navbar from './NavBar'
import Card from './Card'
import Form from './Form'
import '../styles/main.scss'


const Tasks = () => {
  
  const [coins,setCoins]=useState(0)
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
      <Navbar coins={coins} setCoins={setCoins}/>
      <Form isOpen={isOpen} openModal={openModal} closeModal={closeModal}/>
      <main className='layout' >
        <div className='title-task'>
          <h1 >Suas Tarefas</h1> <button onClick={openModal}><i className="bi bi-plus-circle"></i></button>
        </div>
        <section>
          <ul className='card-list'>        
          
          </ul>
        </section>
      </main>
    </div>
  )
}
export default Tasks