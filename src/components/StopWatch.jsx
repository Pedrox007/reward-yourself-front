import '../styles/stopwatch.scss';
import '../styles/modal.scss';
import React, { useState, useRef, useEffect } from 'react';
import { TaskService } from '../service/Task.service';
import { useAuth } from '../context/AuthContext';
import { TaskContext } from '../context/TaskContext';
import { RewardService } from '../service/Reward.service';

const StopWatch = ({ time, isOpenWatch, closeWatch, id, isReward }) => {
  const { loginResponse, getUserInfo } = useAuth();

  const hour = String(time).split(':')[0];
  const minutes = String(time).split(':')[1];
  const seconds = String(time).split(':')[2];

  const [timer, setTimer] = useState(`${hour}:${minutes}:${seconds}`);

  const [intervalId, setIntervalId] = useState(null);
  const [secondsCounter, setSecondsCounter] = useState(0);

  const [buy, setBuy] = useState(false);

  const addSecond = () => {
    setSecondsCounter((prevState) => prevState + 1);
  };

  const handleBuy = async () => {
    setBuy(true);
    try {
      const res = await RewardService(loginResponse).buy(id);
      await getUserInfo();
    } catch (error) {
      console.log(error);
      alert('Erro ao comprar recompensa. ' + error?.response?.data?.message);
    }
  };

  const startCount = () => {
    if (isReward && !buy) handleBuy();

    const id = setInterval(() => {
      addSecond();
    }, 1000);

    setIntervalId(id);
  };

  const stopCount = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const restartCount = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSecondsCounter(0);
  };

  const handleFinish = async () => {
    try {
      const res = await TaskService(loginResponse).finish(id);
      await getUserInfo();
    } catch (error) {
      console.log(error);
      alert('Erro ao finalizar tarefa');
    }
  };

  React.useEffect(() => {
    if (secondsCounter) {
      let s = seconds - Math.floor(secondsCounter % 60);
      let m = minutes - Math.floor((secondsCounter / 60) % 60);
      let h = hour - Math.floor((secondsCounter / 60 / 60) % 60);

      s = s < 0 ? '00' : `0${s}`.slice(-2);
      m = m < 0 ? '00' : `0${m}`.slice(-2);
      h = h < 0 ? '00' : `0${h}`.slice(-2);

      if (s === '00' && m === '00' && h === '00') {
        setTimer('Concluído');
        clearInterval(intervalId);
        if (!isReward) handleFinish();
      } else {
        setTimer(`${h}:${m}:${s}`);
      }
    }
  }, [secondsCounter]);

  if (isOpenWatch) {
    return (
      <div className="modal">
        <div className="watch">
          <div className="close" onClick={closeWatch}>
            <i className="bi bi-x-lg"></i>
          </div>
          <span className="time">{timer}</span>

          <div className="watch-controls">
            <button className="timer-button clickable" onClick={startCount}>
              <i className="bi bi-play-fill"></i>
            </button>

            <button className="timer-button clickable" onClick={stopCount}>
              <i className="bi bi-pause-fill"></i>
            </button>

            <button className="timer-button clickable" onClick={restartCount}>
              <i className="bi bi-arrow-repeat"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default StopWatch;
