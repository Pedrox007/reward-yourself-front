import React from 'react';
import Checkbox from './Checkbox';

const Form = ({ sendData, handleChange, closeModal, inputs }) => {
  const checkbox = inputs[0].label == 'Tarefa' ? <Checkbox handleChange={handleChange} /> : <></>;

  async function resolve() {
    try {
      await sendData();
      closeModal();
    } catch (error) {
      console.log(error);
      alert('Erro ao criar tarefa');
    }
  }

  return (
    <>
      <form>
        <h1>Adicionar {inputs[0].label}</h1>
        <hr />
        {checkbox}

        {inputs.map((item, index) => {
          let input = <input onChange={handleChange} type={item.type} name={item.name} />;

          if (item.type == 'textarea') {
            input = (
              <textarea rows="4" cols="30" name="descricao" onChange={handleChange}></textarea>
            );
          }
          return (
            <div key={index} className="modal-input-block">
              <label htmlFor={item.name}>{item.label}</label>
              {input}
            </div>
          );
        })}

        <button type="button" onClick={resolve}>
          Adicionar
        </button>
      </form>
    </>
  );
};
export default Form;
