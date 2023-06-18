import React from 'react'
import '../styles/empty.scss'
import empty_list from '../assets/empy_list.png'

const EmptY = () => {
  return (
    <div className='empty-list'>
        <img src={empty_list} alt="empty" />
        
        <div className="overlay-empty">
            <p>
            Cadastre suas atividades diárias para
            ganhar moedas e poder alcançar o merecido 
            descanso e lazer. 
            </p>
        </div>
    </div>
  )
}

export default EmptY