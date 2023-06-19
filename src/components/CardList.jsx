import React from 'react'
import Card from './Card'
import EmptY from './Empyt'

const CardList = ({tasks}) => {
  console.log(tasks)
  if(tasks.length==0) return <EmptY/>
  return (
    <>
        <ul className='card-list'> 
        { tasks.map((item,index)=>{
          return <li key={index} ><Card item={item}/></li>
        })}       
        </ul>
    </>
  )
}

export default CardList