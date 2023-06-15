import React from 'react'
import '../styles/card.scss'
import list_icon from '../assets/list.png'
const Card = () => {
  return (
    <>
        <div className="card">
            <div className="left">
              <img src={list_icon} alt="list_icon" />
            </div>

            <div className="right">          
              <div className="">
              <h4>titulo</h4>
                <span><i>icon</i>Moedas:</span>
                <span><i>icon</i>Criado em:</span>
              </div>
            </div>
        </div>
    </>
  )
}
export default Card;