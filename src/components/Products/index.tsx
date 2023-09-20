import { useContext } from 'react'
import { ProductCard } from '../ProductCard'
import { ContainerTitle, ProductContainer } from './styles'
import { CartContext } from '../../contexts/CartContext'

interface ProductProps {
  id: number
  name: string
  image_url: string
  Category: string
  Description: string
  price: number
  quantity?: number
  total?: number
  addItemToCart: (id: number) => void
}

export function Products() {
  const { products, cart } = useContext(CartContext)

  return (
    <>
      <ContainerTitle>Nossos cafés</ContainerTitle>
      <ProductContainer>
        {products.map((product: ProductProps) => {
          const productInCart = cart.find((item) => item.id === product.id)
          const quantity = productInCart ? productInCart.quantity : 0

          return (
            <ProductCard
              key={product.id}
              coffee={product}
              quantity={quantity}
            />
          )
        })}
      </ProductContainer>
    </>
  )
}
