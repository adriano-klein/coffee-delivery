import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, RightContent, CartButton } from './styles'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  const { totalQuantityInCart } = useContext(CartContext)
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>
      <RightContent>
        <div>
          <MapPin size={22} />
          <p>São Paulo, SP</p>
        </div>
        <CartButton>
          <Link to={'/cart'}>
            <ShoppingCart size={22} />
          </Link>
          <span>{totalQuantityInCart()}</span>
        </CartButton>
      </RightContent>
    </HeaderContainer>
  )
}
