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

  const [finish, setFinish] = useState(false);

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
    if (finish) return;
    if (!intervalId) {
      if (isReward && !buy) handleBuy();

      const id = setInterval(() => {
        addSecond();
      }, 1000);

      setIntervalId(id);
    }
  };

  const stopCount = () => {
    if (finish) return;
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const restartCount = () => {
    if (finish) return;
    setSecondsCounter(0);
    clearInterval(intervalId);
    setIntervalId(null);
    // calculateTimer();
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

  const calculateTimer = () => {
    let s = seconds - Math.floor(secondsCounter % 60);
    let m = minutes - Math.floor((secondsCounter / 60) % 60);
    let h = hour - Math.floor((secondsCounter / 60 / 60) % 60);

    s = s < 0 ? '00' : `0${s}`.slice(-2);
    m = m < 0 ? '00' : `0${m}`.slice(-2);
    h = h < 0 ? '00' : `0${h}`.slice(-2);

    if (s === '00' && m === '00' && h === '00') {
      if (!isReward && !finish) handleFinish();
      setTimer('Concluído');
      setFinish(true);
      clearInterval(intervalId);
    } else {
      setTimer(`${h}:${m}:${s}`);
    }
  };

  React.useEffect(() => {
    calculateTimer();
  }, [secondsCounter]);

  if (isOpenWatch) {
    return (
      <div className="modal">
        <div className="watch">
          <div className="close" onClick={closeWatch}>
            <i className="bi bi-x-lg"></i>
          </div>
          <span className="time">{timer}</span>

          {!finish ? (
            <div className="watch-controls">
              <button className="timer-button clickable" onClick={startCount}>
                <i className="bi bi-play-fill"></i>
              </button>

              <button className="timer-button clickable" onClick={stopCount}>
                <i className="bi bi-pause-fill"></i>
              </button>
              {!intervalId ? (
                <button className="timer-button clickable" onClick={restartCount}>
                  <i className="bi bi-arrow-repeat"></i>
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
  return <></>;
};

export default StopWatch;
