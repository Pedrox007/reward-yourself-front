import React, { useContext, useState } from 'react'
import {TaskContext} from '../context/TaskContext'
import Form from './Form'
import '../styles/modal.scss'

const Modal = ({isOpen,closeModal}) => {
const {sendData,handleChange}= useContext(TaskContext)
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