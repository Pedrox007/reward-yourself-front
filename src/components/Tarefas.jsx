import React from 'react'
import Navbar from './NavBar'
import Card from './Card'
import '../styles/main.scss'
const Tarefas = () => {
  return (
    <div>
      <Navbar/>
      <main >
        <h1>Suas Tarefas</h1>
        <section>
          <ul className='card-list'>
            <li className='item'><Card/></li>
            <li className='item'><Card/></li>
            <li className='item'><Card/></li>
            <li className='item'><Card/></li>
            <li className='item'><Card/></li>
            <li className='item'><Card/></li>
            <li className='item'><Card/></li>
            <li className='item'><Card/></li>
          </ul>
        </section>
      </main>
    </div>
  )
}
export default Tarefas