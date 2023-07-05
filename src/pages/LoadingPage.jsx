import { useState } from 'react';

import icon from '../assets/icon.png';

import '../styles/notfound.scss';

const LoadingPage = () => {
  return (
    <>
      <main className="not-found" style={{ color: '#fff', backgroundColor: '#f79329' }}>
        <img src={icon} alt="" />
        <h1>Reward Yourself</h1>
        <p style={{ marginTop: 20 }}>Carregando... </p>
        <div className="spin" style={{ width: 70, height: 70, marginTop: 30 }}>
          <i className="bi bi-arrow-clockwise " style={{ fontSize: 70 }} />
        </div>
      </main>
    </>
  );
};

export default LoadingPage;
