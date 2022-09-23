import { MapPinLine } from 'phosphor-react'
import {
  AddressContainer,
  AddressFormContainer,
  AddressTitle,
  AddressTitleIcon,
  AddressTitleText,
  AddressInput,
} from './styles'

export function Address() {
  return (
    <AddressContainer>
      <AddressTitle>
        <AddressTitleIcon>
          <MapPinLine size={22} />
        </AddressTitleIcon>
        <AddressTitleText>
          <h3>Endereço de Entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </AddressTitleText>
      </AddressTitle>

      <AddressFormContainer>
        <AddressInput
          type="text"
          name="cep"
          placeholder="CEP"
          className="cep"
        />
        <AddressInput
          type="text"
          name="rua"
          placeholder="Endereço"
          className="rua"
        />
        <AddressInput
          type="text"
          name="numero"
          placeholder="Número"
          className="numero"
        />
        <AddressInput
          type="text"
          name="complemento"
          placeholder="Complemento"
          className="complemento"
        />
        <AddressInput
          type="text"
          name="bairro"
          placeholder="Bairro"
          className="bairro"
        />
        <AddressInput
          type="text"
          name="cidade"
          placeholder="Cidade"
          className="cidade"
        />
        <AddressInput type="text" name="uf" placeholder="UF" className="uf" />
      </AddressFormContainer>
    </AddressContainer>
  )
}
