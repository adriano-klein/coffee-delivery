import { ShoppingCart, PlusCircle, MinusCircle } from 'phosphor-react'
import {
  AmountContainer,
  AmountContainerAndCart,
  PriceContainer,
  ProductCategory,
  ProductContainer,
  ProductDescription,
  ProductFooter,
  ProductTitle,
} from './styles'
import { useContext } from 'react'
import { CartContext, ProductProps } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  coffee: ProductProps
  quantity?: number
}

export function ProductCard({ coffee, quantity }: ProductCardProps) {
  const { addItemToCart } = useContext(CartContext)
  return (
    <ProductContainer>
      <img src={coffee.image_url} alt={''} />
      <ProductCategory>{coffee.Category}</ProductCategory>
      <ProductTitle>{coffee.name}</ProductTitle>
      <ProductDescription>{coffee.Description}</ProductDescription>
      <ProductFooter>
        <PriceContainer>
          <span>R$</span>
          <h2>{`${coffee.price}0`}</h2>
        </PriceContainer>
        <AmountContainerAndCart>
          <AmountContainer>
            <MinusCircle size={22} />
            <span>{quantity}</span>
            <PlusCircle size={22} onClick={() => addItemToCart(coffee.id)} />
          </AmountContainer>
          <button>
            <Link to={'/cart'}>
              <ShoppingCart size={22} />
            </Link>
          </button>
        </AmountContainerAndCart>
      </ProductFooter>
    </ProductContainer>
  )
}
