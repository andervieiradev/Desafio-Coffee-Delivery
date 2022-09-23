import { ActionsHeaderContainer, HeaderContainer, LocationCard } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { MapPin } from 'phosphor-react'
import { CartIcon } from './components/CartIcon'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <header>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <ActionsHeaderContainer>
          <LocationCard>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </LocationCard>

          <CartIcon qtdItems={cart.length} />
        </ActionsHeaderContainer>
      </header>
    </HeaderContainer>
  )
}
