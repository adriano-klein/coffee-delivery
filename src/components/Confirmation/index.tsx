import {
  ConfirmationContainer,
  LeftContainer,
  ResumeContainer,
  IconDiv,
} from './styles'
import motorcycle from '../../assets/motorcycle.svg'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { CartContext } from '../../contexts/CartContext'
import { useContext, useState } from 'react'

export function Confirmation() {
  const { order } = useContext(CartContext)

  return (
    <ConfirmationContainer>
      <LeftContainer>
        <div>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você!</span>
        </div>
        <section>
          <ResumeContainer>
            <IconDiv bgcolor={'purple'}>
              <MapPin weight="fill" />
            </IconDiv>
            <div>
              <span>Entrega em Rua Angelo Oriente 57</span>
              <span>
                {`${order.deliveryAddress.neighborhood} - ${order.deliveryAddress.city}, ${order.deliveryAddress.state}`}
              </span>
            </div>
          </ResumeContainer>

          <ResumeContainer>
            <IconDiv bgcolor={'yellow'}>
              <Clock weight="fill" />
            </IconDiv>
            <div>
              <span>Previsão de entrega</span>
              <span> 20 min - 30 min</span>
            </div>
          </ResumeContainer>

          <ResumeContainer>
            <IconDiv bgcolor={'yellow-dark'}>
              <CurrencyDollar weight="fill" />
            </IconDiv>
            <div>
              <span>Pagamento na entrega</span>
              <span>{order.deliveryAddress.paymentMethod}</span>
            </div>
          </ResumeContainer>
        </section>
      </LeftContainer>
      <div>
        <img src={motorcycle} alt="" />
      </div>
    </ConfirmationContainer>
  )
}
