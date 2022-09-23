import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  PaymentContainer,
  PaymentTitle,
  PaymentTitleIcon,
  PaymentTitleText,
  PaymentTypeCheckBox,
  PaymentTypeContainer,
} from './styles'

export function Payment() {
  return (
    <PaymentContainer>
      <PaymentTitle>
        <PaymentTitleIcon>
          <CurrencyDollar size={22} />
        </PaymentTitleIcon>
        <PaymentTitleText>
          <h3>Pagamento</h3>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </PaymentTitleText>
      </PaymentTitle>

      <PaymentTypeContainer>
        <PaymentTypeCheckBox className="active">
          <CreditCard size={22} />
          Cartão de Crédito
        </PaymentTypeCheckBox>
        <PaymentTypeCheckBox>
          <Money size={22} />
          Cartão de Débito
        </PaymentTypeCheckBox>
        <PaymentTypeCheckBox>
          <Bank size={22} />
          Dinheiro
        </PaymentTypeCheckBox>
      </PaymentTypeContainer>
    </PaymentContainer>
  )
}
