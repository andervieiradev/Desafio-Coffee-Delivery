import { Address } from './components/Address'
import { CartSidebar } from './components/CartSidebar'
import { Payment } from './components/Payment'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <main>
        <h2>Complete seu pedido</h2>
        <Address />
        <Payment />
      </main>
      <main>
        <h2>Cafés selecionados</h2>
        <CartSidebar />
      </main>
    </CheckoutContainer>
  )
}
