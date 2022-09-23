import {
  SuccessContainer,
  SuccessIcons,
  SuccessItensListContainer,
} from './styles'
import SuccessIlustration from '../../assets/success-ilustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <main>
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>

        <SuccessItensListContainer>
          <SuccessIcons iconBackgroundColor="purple">
            <span className="icon">
              <MapPin size={16} weight="fill" />
            </span>
            <span>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <br />
              Farrapos - Porto Alegre, RS
            </span>
          </SuccessIcons>

          <SuccessIcons iconBackgroundColor="yellow">
            <span className="icon">
              <Timer size={16} weight="fill" />
            </span>
            <span>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </span>
          </SuccessIcons>

          <SuccessIcons iconBackgroundColor="yellow-dark">
            <span className="icon">
              <CurrencyDollar size={16} />
            </span>
            <span>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </span>
          </SuccessIcons>
        </SuccessItensListContainer>
      </main>

      <main>
        <img src={SuccessIlustration} alt="" />
      </main>
    </SuccessContainer>
  )
}
