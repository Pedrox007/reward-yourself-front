import React, { useState } from 'react'
import Form from './Form'
import '../styles/modal.scss'

const Modal = ({isOpen,closeModal}) => {

if(isOpen){
  return (
    <>
    <div className="modal">
    <div className="form-conteiner">
          <div className="modal-header">
          <i onClick={closeModal} className="bi bi-x-lg"></i>
          </div>
           <Form/>
      </div>
    </div>
    </>
  )}
  return <></>
}
export default Modal