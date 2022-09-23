import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartIconContainer } from './styles'

interface CartIconProp {
  qtdItems?: number
}

export function CartIcon({ qtdItems = 0 }: CartIconProp) {
  return (
    <NavLink to={'/checkout'}>
      <CartIconContainer>
        <ShoppingCart size={22} weight="fill" />
        {qtdItems > 0 && <span>{qtdItems}</span>}
      </CartIconContainer>
    </NavLink>
  )
}
