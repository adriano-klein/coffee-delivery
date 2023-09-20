// criar um contexto para alimentar a aplicação com os produtos do db.json, e os produtos que estão no carrinho

import { createContext, ReactNode, useEffect, useState } from 'react'

interface CartProps {
  id: number
  name: string
  image_url: string
  Category: string
  Description: string
  price: number
  quantity?: number
  total?: number
}

export interface ProductProps {
  id: number
  name: string
  image_url: string
  Category: string
  Description: string
  price: number
  total?: number
  quantity?: number
  addItemToCart: (id: number) => void
}

interface OrderProps {
  cep: number
  city: string
  state: string
  neighborhood: string
  street: string
  number: number
  complement: string
  paymentMethod: string
}

interface CartContextData {
  cart: CartProps[]
  products: ProductProps[]
  addItemToCart: (id: number) => void
  totalQuantityInCart: () => number
  calculateTotalValueInCart: () => number
  handleCreateNewOrder: (data: OrderProps) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  order: any
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [cart, setCart] = useState<CartProps[]>([])
  const [order, setOrder] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  function totalQuantityInCart() {
    const totalInCart = cart.reduce((acc, item) => {
      return acc + (item.quantity || 0)
    }, 0)

    return totalInCart
  }

  // NOTE: Soma e formatação do preço total dos produtos no carrinho
  function calculateTotalValueInCart() {
    const totalValueInCart = cart.reduce((acc, item) => {
      return acc + (item.total || 0)
    }, 0)

    return totalValueInCart
  }

  function addItemToCart(id: number) {
    const product = products.find((product) => product.id === id)
    const productInCart = cart.find((product) => product.id === id)

    if (productInCart) {
      const newCart = cart.map((product) => {
        if (product.id === id) {
          const quantity = product.quantity || 0
          return {
            ...product,
            quantity: quantity + 1,
            total: product.price * (quantity + 1),
          }
        }
        return product
      })

      setCart(newCart)
    } else if (product) {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
          total: product.price,
        },
      ])
    }
  }

  function handleCreateNewOrder(data: OrderProps) {
    const newOrder = {
      ...cart,
      deliveryAddress: data,
      total: calculateTotalValueInCart() + 3.7,
    }

    setOrder(newOrder)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        addItemToCart,
        totalQuantityInCart,
        calculateTotalValueInCart,
        handleCreateNewOrder,
        order,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
