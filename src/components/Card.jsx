import React from 'react'
import '../styles/card.scss'
import list_icon from '../assets/list.png'
import coin_icon from '../assets/coin_icon.png'

const data = Date(Date.now())
let dia= data.toString().slice(8,11)
let mes= data.toString().slice(4,7)
let ano= data.toString().slice(10,16)

const Card = ({item}) => {
  return (
    <>
    <div className='card-header'> {item.tarefa}
      <span>
       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.20834 21.6875C1.63542 21.6875 1.14479 21.4836 0.73646 21.076C0.328127 20.6684 0.124307 20.1777 0.125002 19.6041V5.02079C0.125002 4.44788 0.329168 3.95725 0.737502 3.54892C1.14584 3.14058 1.63611 2.93676 2.20834 2.93746H11.5052L9.42188 5.02079H2.20834V19.6041H16.7917V12.3645L18.875 10.2812V19.6041C18.875 20.177 18.6708 20.6677 18.2625 21.076C17.8542 21.4843 17.3639 21.6882 16.7917 21.6875H2.20834ZM13.849 3.53642L15.3333 4.99475L8.45834 11.8698V13.3541H9.91667L16.8177 6.45308L18.3021 7.91142L10.8021 15.4375H6.375V11.0104L13.849 3.53642ZM18.3021 7.91142L13.849 3.53642L16.4531 0.932251C16.8698 0.515584 17.3691 0.307251 17.951 0.307251C18.533 0.307251 19.0233 0.515584 19.4219 0.932251L20.8802 2.41663C21.2795 2.81593 21.4792 3.30204 21.4792 3.87496C21.4792 4.44788 21.2795 4.93399 20.8802 5.33329L18.3021 7.91142Z" fill="#6A6180"/>
      </svg>
      </span>
    </div>
        <div className="card">
          
            <div className="left">
              <img src={list_icon} alt="list_icon" />
            </div>

            <div className="right">          
              <div className="card-body">
              <h4>{item.descricao}</h4>
              <span className='card-text'><img src={coin_icon} alt="coin_icon" />Moedas: <p className='text-value'>{item.custo}</p></span>
              <span className='card-text'><i className="bi bi-alarm"></i>Tempo: <p className='text-value'>{item.tempo} min</p></span>
              <span className='card-text'><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.916565 15.716V1.82715H3.32427V0.283936H4.92941V1.82715H11.3499V0.283936H12.9551V1.82715H15.3628V7.99998H13.7577V6.45677H2.5217V14.1728H8.13968V15.716H0.916565ZM16.2657 11.858L14.5602 10.2183L15.7039 9.11881L17.4093 10.7585L16.2657 11.858ZM9.74481 16.4876V14.848L13.9984 10.7585L15.7039 12.3981L11.4503 16.4876H9.74481ZM2.5217 4.91356H13.7577V3.37036H2.5217V4.91356Z" fill="#6A6180"/>
</svg>Criado em: <p className='text-value'>{`${dia} de ${mes} ${ano}`}</p></span>
              </div>
            </div>
        </div>
    </>
  )
}


export default Card;