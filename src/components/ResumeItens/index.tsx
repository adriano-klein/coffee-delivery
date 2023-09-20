import { Minus, Plus, Trash } from 'phosphor-react'
import {
  AmountAndTrash,
  ProductContainer,
  LeftContainer,
  TrashContainer,
  RightContainer,
} from './styles'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'
import { FormatPrice } from '../../helpers/FormatPrice'

interface CartProductProps {
  id: number
  name: string
  quantity?: number
  image_url: string
  price: number
  total?: number
}

export function ResumeItems(coffee: CartProductProps) {
  const { addItemToCart } = useContext(CartContext)
  return (
    <ProductContainer>
      <img src={coffee.image_url} alt="" />
      <div>
        <span>{coffee.name}</span>
        <LeftContainer>
          <AmountAndTrash>
            <div>
              <Minus size={16} />
              <p>{coffee.quantity}</p>
              <Plus size={16} onClick={() => addItemToCart(coffee.id)} />
            </div>
          </AmountAndTrash>
          <TrashContainer>
            <Trash size={14} />
            <p>Remover</p>
          </TrashContainer>
        </LeftContainer>
      </div>
      <RightContainer>
        <h3>{FormatPrice(coffee.total || 0)}</h3>
      </RightContainer>
    </ProductContainer>
  )
}
