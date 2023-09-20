import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function CartPage() {
  const { totalQuantityInCart } = useContext(CartContext)
  return (
    <>
      <h1>{totalQuantityInCart()}</h1>
      <h1>Cart</h1>
      <h1>Cart</h1>
      <h1>Cart</h1>
      <h1>Cart</h1>
      <h1>Cart</h1>
      <h1>Cart</h1>
      <h1>Cart</h1>
    </>
  )
}
