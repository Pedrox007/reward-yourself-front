import '../styles/stopwatch.scss';
import '../styles/modal.scss';
import { useState, useRef, useEffect } from 'react';

const StopWatch = ({ time, isOpenWatch, closeWatch }) => {
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState('00:00');
  const [runing, setIsRuning] = useState(false);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds
    };
  };

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer(`${time}:00`);

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + time * 60);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  const run = () => {
    setIsRuning(true);
    onClickReset();
  };

  if (isOpenWatch) {
    return (
      <div className="modal">
        <div className="watch">
          <div className="close" onClick={closeWatch}>
            <i className="bi bi-x-lg"></i>
          </div>
          <span className="time">{runing ? timer : `${time}:00`}</span>
          <div className="watch-controls">
            <i onClick={run} className="bi bi-play-fill"></i>
            <i className="bi bi-pause-fill"></i>
            <i onClick={onClickReset} className="bi bi-arrow-repeat"></i>
            <i className="bi bi-flag-fill"></i>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default StopWatch;
