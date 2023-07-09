import React from 'react';
import Checkbox from './Checkbox';

const Form = ({ sendData, deleteData, handleChange, closeModal, inputs, item }) => {
  const isEdit = item ? true : false;
  const isTask = inputs[0].label == 'Tarefa' ? true : false;

  const checkbox = isTask ? (
    <Checkbox handleChange={handleChange} defaultChecked={item?.fixed} />
  ) : (
    <></>
  );

  const [loading, setLoading] = React.useState(false);
  const [delLoading, setDelLoading] = React.useState(false);

  async function resolve() {
    setLoading(true);
    try {
      await sendData(isEdit ? item?.id : null);
      closeModal();
    } catch (error) {
      console.log(error);
      alert(`Erro ao ${isEdit ? 'editar' : 'criar'} ${isTask ? 'tarefa' : 'recompensa'}`);
    } finally {
      setLoading(false);
    }
  }

  async function del() {
    setDelLoading(true);
    try {
      await deleteData(isEdit ? item?.id : null);
      closeModal();
    } catch (error) {
      console.log(error);
      alert(`Erro ao deletar ${isTask ? 'tarefa' : 'recompensa'}`);
    } finally {
      setDelLoading(false);
    }
  }

  return (
    <>
      <form>
        <h1>
          {isEdit ? 'Editar' : 'Adicionar'} {inputs[0].label}
        </h1>
        <hr />
        {checkbox}

        {inputs.map((inputItem, index) => {
          let input = (
            <input
              onChange={handleChange}
              type={inputItem.type}
              name={inputItem.name}
              defaultValue={isEdit ? item[inputItem.apiName] : ''}
            />
          );

          if (inputItem.type == 'textarea') {
            input = (
              <textarea
                rows="4"
                cols="30"
                name="descricao"
                defaultValue={isEdit ? item[inputItem.apiName] : ''}
                onChange={handleChange}></textarea>
            );
          }

          return (
            <div key={index} className="modal-input-block">
              <label htmlFor={inputItem.name}>{inputItem.label}</label>
              {input}
            </div>
          );
        })}

        <button type="button" onClick={resolve}>
          {loading ? (
            <div className="spin-container">
              <div className="spin">
                <i className="bi bi-arrow-clockwise " />
              </div>
            </div>
          ) : isEdit ? (
            'Salvar'
          ) : (
            'Adicionar'
          )}
        </button>

        {isEdit ? (
          <button style={{ backgroundColor: 'red' }} type="button" onClick={del}>
            {delLoading ? (
              <div className="spin-container">
                <div className="spin">
                  <i className="bi bi-arrow-clockwise " />
                </div>
              </div>
            ) : (
              'Deletar'
            )}
          </button>
        ) : null}
      </form>
    </>
  );
};
export default Form;
