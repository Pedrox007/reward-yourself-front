import React, { useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import {RewardContext} from '../context/RewardContext'
import Form from './Form'
import '../styles/modal.scss'

const Modal = ({isOpen,closeModal,type}) => {
const context = type=="task"? TaskContext : RewardContext;
console.log(type)
const {sendData,handleChange}= useContext(context)
if(isOpen){
  return (
    <>
    <div className="modal">
    <div className="form-conteiner">
          <div className="modal-header">
          <i onClick={closeModal} className="bi bi-x-lg"></i>
          </div>
           <Form closeModal={closeModal} sendData={sendData} handleChange={handleChange}/>
      </div>
    </div>
    </>
  )}
  return <></>
}
export default Modal