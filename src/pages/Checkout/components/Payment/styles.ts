import styled from 'styled-components'

export const PaymentContainer = styled.div`
  background: ${(prosp) => prosp.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  gap: 2rem;
`
export const PaymentTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`
export const PaymentTitleIcon = styled.div`
  width: 2rem;
  display: flex;
  align-items: start;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentTitleText = styled.div`
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
export const PaymentTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
`

export const PaymentTypeCheckBox = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 0.8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  font-weight: 400;

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  &.active {
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`
