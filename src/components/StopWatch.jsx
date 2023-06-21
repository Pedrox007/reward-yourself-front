import '../styles/stopwatch.scss'
import '../styles/modal.scss'
import { useEffect, useState } from 'react'

const StopWatch = ({time,isOpenWatch,closeWatch}) => {
  const [count,setCount]=useState(parseInt(time))
  const [intervalId, setIntervalId] = useState(0);

  const handleClickStart = () => { return}


  const handleClickStop=()=>{
  
    return
  }

if(isOpenWatch){
  return (
    <div className="modal">
        <div className="watch">
            <div className="close" onClick={closeWatch} >
                <i className="bi bi-x-lg"></i>
            </div>
            <span className="time">{count}:00</span>
            <div className="watch-controls">
                <i onClick={handleClickStart} className="bi bi-play-fill"></i>
                <i onClick={handleClickStop}className="bi bi-pause-fill"></i>
                <i className="bi bi-arrow-repeat"></i>
                <i className="bi bi-flag-fill"></i>
            </div>
        </div>
    </div>
  )}
  return <></>
}

export default StopWatch