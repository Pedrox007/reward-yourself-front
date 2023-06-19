import React from 'react'

const Form = ({sendData,handleChange,closeModal}) => {
function resolve(){
  sendData()
  closeModal()
}
  return (
    <>
          <form>
            <h1>Adicionar Tarefas</h1>
                <label  htmlFor="tarefa">Tarefa</label>
                <input onChange={handleChange} type="text" id="tarefa" />

                <label  htmlFor="tempo">Tempo(hora)</label>
                <input onChange={handleChange}type="number" id="tempo"/>

                <label  htmlFor="custo">Custo</label>
                <input onChange={handleChange} type="number" id="custo" />

                <label  htmlFor="descricao">Descrição</label>
                <input onChange={handleChange} type="text-area" id="descricao" />

                <button type="button" onClick={resolve}>Adicionar</button>        
              </form>
    </>
  )
}
export default Form