import { useState } from 'react';
import '../styles/notfound.scss';

const NotFound = () => {
  return (
    <>
      <main className="not-found">
        <h1>Erro 404</h1>
        <p>Página não encontrada</p>
        <button
          type="button"
          onClick={() => {
            window.location.replace('/login');
          }}>
          Voltar
        </button>
      </main>
    </>
  );
};

export default NotFound;
