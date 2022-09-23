import styled from 'styled-components'

export const AddressContainer = styled.div`
  background: ${(prosp) => prosp.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  gap: 2rem;
`
export const AddressTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`
export const AddressTitleIcon = styled.div`
  width: 2rem;
  display: flex;
  align-items: start;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressTitleText = styled.div`
  flex: 1;
  font-weight: 400;
  line-height: 1.3;

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`
export const AddressFormContainer = styled.div`
  display: grid;

  grid-template-columns:
    minmax(5rem, 12.5rem)
    minmax(11rem, 1fr)
    3.75rem;
  grid-template-rows: 1fr;
  gap: 1rem 0.875rem;
  grid-template-areas:
    'cep . .'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';

  .cep {
    grid-area: cep;
  }
  .rua {
    grid-area: rua;
  }
  .complemento {
    grid-area: complemento;
  }
  .numero {
    grid-area: numero;
  }
  .bairro {
    grid-area: bairro;
  }
  .cidade {
    grid-area: cidade;
  }
  .uf {
    grid-area: uf;
  }
`

export const AddressInput = styled.input`
  width: 100%;
  background: ${(props) => props.theme['base-input']};
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};

  font-size: 0.875rem;
  line-height: 1.3;

  font-weight: 400;

  color: ${(props) => props.theme['base-text']};

  :placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  :active {
    color: ${(props) => props.theme['base-label']};
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  :focus {
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
