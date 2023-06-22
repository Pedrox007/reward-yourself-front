import check_icon from '../assets/check_icon.png'
import calendar from '../assets/calendar.svg'
import coin_icon from '../assets/coin_icon.png'
import clock from '../assets/clock.svg'

const CardReward = ({item}) => {
  return (
    <div className='card-container'>
      <div className='card-header'><h4>{item.tarefa}</h4> 
        <span><img src={calendar} alt="calendar" /></span>
      </div>
          <div className="card">
      
              <div className="card-left">
                <img src={check_icon} alt="list_icon" />
              </div>
              <div className="card-right">
                <div className="card-body">
                <span className='card-text'><img src={coin_icon} alt="coin_icon" />Moedas:
                 <p className='text-value'>{item.custo}</p>
                </span>
                <span className='card-text'><img src={clock} alt="coin_icon" />Tempo:
                 <p className='text-value'>{item.custo}</p>
                </span>
                <button >COMPRAR</button>
                </div>
              </div>
          </div>
    </div>
  )
}

export default CardReward