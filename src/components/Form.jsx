import React,{ useState } from 'react'

const Form = () => {
const [data,setData]=useState({})

function handleChange(e){
    const name = e.target.name
    const value = e.target.value
    setData(values=> ({...values,[name]:value}))
}
  return (
    <>
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
    </>
  )
}
export default Form