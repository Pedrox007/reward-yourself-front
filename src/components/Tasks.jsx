import React, { useState } from 'react'
import Navbar from './NavBar'
import Card from './Card'
import Form from './Form'
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

      <Navbar/>
      <main >
      <Form isOpen={isOpen} openModal={openModal} closeModal={closeModal}/>
        <div className='title-task'>
          <h1 >Suas Tarefas</h1> <button onClick={openModal}><i className="bi bi-plus-circle"></i></button>
        </div>
        <section>
          <ul className='card-list'>        
            <li><Card/></li>
            <li><Card/></li>
            <li><Card/></li>
            <li><Card/></li>
            <li><Card/></li>
            <li><Card/></li>
            <li><Card/></li>
            <li><Card/></li>
          </ul>
        </section>
      </main>
    </div>
  )
}
export default Tarefas