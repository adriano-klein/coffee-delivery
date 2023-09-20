import coffee from '../../assets/coffee.png'
import { ShoppingCart, Clock, BoundingBox, Coffee } from 'phosphor-react'
import {
  BannerContainer,
  LeftSideBannerContainer,
  IconContainer,
  IconDiv,
} from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <LeftSideBannerContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o coffee Delivery você recebe seu café onde estiver, a qualquer
          hora.
        </p>
        <IconContainer>
          <span>
            <IconDiv bgcolor={'yellow-dark'}>
              <ShoppingCart />
            </IconDiv>
            Compra simples e segura
          </span>
          <span>
            <IconDiv bgcolor={'base-subtitle'}>
              <BoundingBox />
            </IconDiv>
            Embalagem mantém o café intacto
          </span>
          <span>
            <IconDiv bgcolor={'yellow'}>
              <Clock />
            </IconDiv>
            Entrega rápida e rastreada
          </span>
          <span>
            <IconDiv bgcolor={'purple'}>
              <Coffee />
            </IconDiv>
            O café chega fresquinho até você
          </span>
        </IconContainer>
      </LeftSideBannerContainer>
      <div>
        <img src={coffee} alt="" />
      </div>
    </BannerContainer>
  )
}
