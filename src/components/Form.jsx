import React, { useState } from 'react'
import '../styles/modal.scss'

const Form = ({isOpen,openModal,closeModal}) => {
const [data,setData]=useState({})

function handleChange(e){
    const name = e.target.name
    const value = e.target.value
    setData(values=> ({...values,[name]:value}))
}

if(isOpen){
  return (
    <>
    <div className="modal">
        <div className="form-conteiner">
           <div className="modal-header"><i onClick={closeModal} class="bi bi-x-lg"></i></div>
          <form>
                    <h1>Adicionar Tarefas</h1>
                        <label name="tarefa"for="tarefa">Tarefa</label>
                        <input onChange={handleChange}type="text" name="tarefa" />
                        <label name="tempo"for="senha">Tempo(hora)</label>
                        <input onChange={handleChange}type="number" name="tempo"/>
                        <label name="custo"for="senha">Custo</label>
                        <input onChange={handleChange} type="number" name="custo" />
                        <label name="descrição"for="descrição">Descrição</label>
                        <input onChange={handleChange}type="text-area" name="descricao" />
                      <button >Adicionar</button>
          
              </form>
        </div>
           
    </div>
    </>
  )}
  return <></>
}
export default Form