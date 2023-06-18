import React from 'react'
import Card from './Card'
import EmptY from './Empyt'

const CardList = ({tasks}) => {
  if(tasks.length<1) return <EmptY/>
  return (
    <div>
        <ul className='card-list'> 
        {tasks.map((item )=>{
            <li key={item.index} ><Card item={item}/></li>
        } )}       

        </ul>
    </div>
  )
}

export default CardList