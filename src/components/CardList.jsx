import React, { useContext } from 'react'
import {TaskContext} from '../context/TaskContext'
import Card from './Card'
import EmptY from './Empyt'

const CardList = ({openWatch,isOpenWatch,closeWatch}) => {
  const {tasks} = useContext(TaskContext)

  if(tasks.length==0) return <EmptY/>
  return (
    <>
          <ul className='card-list'>
          { tasks.map((item,index)=>{
            return <li key={index} ><Card 
            item={item}
            openWatch={openWatch}
            isOpenWatch={isOpenWatch} 
            closeWatch={closeWatch} /></li>
          })}
          </ul>
    </>
  )
}

export default CardList