import React, { useContext } from 'react'
import {TaskContext} from '../context/TaskContext'
import {RewardContext} from '../context/RewardContext'
import Card from './Card'
import CardReward from './CardReward'
import EmptY from './Empyt'

const CardList = ({openWatch,isOpenWatch,closeWatch,type}) => {
  const context = type=="task"? TaskContext : RewardContext;
  const CardType = type=="task" ?  Card:  CardReward;
  let temp = useContext(context)

  let list=[];
  if(type=="task"){
  list=[...temp.tasks]
  }else
  list=[...temp.rewards]

  if(list.length==0) return <EmptY/>
  return (
    <>
          <ul className='card-list'>          
          { list.map((item,index)=>{
            return <li key={index} ><CardType 
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