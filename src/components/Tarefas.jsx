import React from 'react'
import Navbar from './NavBar'
import Card from './Card'

const Tarefas = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <h1>Suas Tarefas</h1>
        <section>
          <ul>
            <li><Card/></li>
            <li><Card/></li>
          </ul>
        </section>
      </main>
    </div>
  )
}
export default Tarefas