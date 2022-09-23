import { createContext, ReactNode, useContext, useState } from 'react'
import { Coffee, CoffeesContext } from './CoffeesContext'

export interface Cart {
  id: number
  coffeeId: number
  quantity: number
}

interface cartItemsWithCoffee extends Cart {
  coffee: Coffee
}

interface CartContextType {
  cart: Cart[]
  cartItemsWithCoffee: cartItemsWithCoffee[]
  handleRemoveItemCart: (id: number) => void
  handleCartItemQuantity: (id: number, quantity: number) => void
  handleAddCartItem: (coffeeId: number, quantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const { coffees } = useContext(CoffeesContext)

  const [cart, setCart] = useState<Cart[]>([])

  const cartItemsWithCoffee = cart.map((item) => {
    return {
      ...item,
      coffee: coffees.filter((coffee) => coffee.id === item.coffeeId)[0],
    }
  })

  function handleRemoveItemCart(id: number) {
    const newCart = cart.filter((cart) => cart.id !== id)
    setCart(newCart)
  }

  function handleCartItemQuantity(id: number, quantity: number) {
    const newCart = cart.map((cart) => {
      if (cart.id === id && quantity > 0 && quantity <= 10) {
        return { ...cart, quantity }
      }

      return cart
    })

    setCart(newCart)
  }

  function handleAddCartItem(coffeeId: number, quantity: number) {
    if (cart.map((item) => item.coffeeId).indexOf(coffeeId) < 0) {
      const newCart = [
        ...cart,
        {
          id: Math.random(),
          coffeeId,
          quantity,
        },
      ] as Cart[]

      setCart(newCart)
    } else {
      const newCart = cart.map((cart) => {
        const newQuantity = cart.quantity + quantity

        if (
          cart.coffeeId === coffeeId &&
          newQuantity > 0 &&
          newQuantity <= 10
        ) {
          return { ...cart, quantity: newQuantity }
        } else if (cart.coffeeId === coffeeId && newQuantity < 0) {
          return { ...cart }
        } else if (cart.coffeeId === coffeeId && newQuantity > 10) {
          return { ...cart, quantity: 10 }
        }

        return cart
      })

      setCart(newCart)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemsWithCoffee,
        handleRemoveItemCart,
        handleCartItemQuantity,
        handleAddCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
