import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../../../contexts/CartContext'
import {
  BtnSubmitCheckout,
  CartItemActionContainer,
  CartItemActionInput,
  CartItemActionInputBtn,
  CartItemContainer,
  CartItemRemoveBtnCart,
  CartResumeContainer,
  CartResumeItem,
  CartSidebarContainer,
  CartSidebarItem,
} from './styles'

export function CartSidebar() {
  const { cartItemsWithCoffee, handleRemoveItemCart, handleCartItemQuantity } =
    useContext(CartContext)

  const totalCartItems = cartItemsWithCoffee.reduce((acumulador, item) => {
    return acumulador + item.quantity * item.coffee.price
  }, 0)

  return (
    <CartSidebarContainer>
      {cartItemsWithCoffee.map((item) => (
        <CartSidebarItem key={item.id}>
          <img src={item.coffee.thumbUrl} width="64px" height="64px" alt="" />

          <CartItemContainer>
            <h3>{item.coffee.name}</h3>

            <CartItemActionContainer>
              <div>
                <CartItemActionInputBtn
                  onClick={() =>
                    handleCartItemQuantity(item.id, item.quantity - 1)
                  }
                >
                  -
                </CartItemActionInputBtn>
                <CartItemActionInput
                  min={1}
                  max={10}
                  value={item.quantity}
                  onChange={(e) =>
                    handleCartItemQuantity(item.id, Number(e.target.value))
                  }
                  type="number"
                />
                <CartItemActionInputBtn
                  onClick={() =>
                    handleCartItemQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </CartItemActionInputBtn>
              </div>
              <CartItemRemoveBtnCart
                onClick={() => handleRemoveItemCart(item.id)}
              >
                <ShoppingCart size={16} /> Remover
              </CartItemRemoveBtnCart>
            </CartItemActionContainer>
          </CartItemContainer>

          <div className="price">
            {(item.quantity * item.coffee.price).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
        </CartSidebarItem>
      ))}

      <CartResumeContainer>
        <CartResumeItem>
          <span>Total de Itens</span>
          <span>
            {totalCartItems.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </CartResumeItem>
        <CartResumeItem>
          <span>Entrega</span>
          <span>R$ 5,50</span>
        </CartResumeItem>
        <CartResumeItem className="bold">
          <span>Total</span>
          <span>
            {(totalCartItems + 5.5).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </CartResumeItem>
      </CartResumeContainer>

      <NavLink to="/success">
        <BtnSubmitCheckout>Confirmar Pedido</BtnSubmitCheckout>
      </NavLink>
    </CartSidebarContainer>
  )
}
