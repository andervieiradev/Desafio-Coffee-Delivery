import styled from 'styled-components'

export const CartSidebarContainer = styled.div`
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`

export const CartSidebarItem = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: start;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  .price {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.3;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }
`

export const CartItemContainer = styled.div`
  flex: 1;
  align-self: center;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    line-height: 1.3;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`

export const CartItemActionContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;

  div {
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    padding: 0.5rem 0.5rem;
  }
`

export const CartItemRemoveBtnCart = styled.span`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  line-height: 1.6;
  font-size: 0.75rem;
  text-transform: uppercase;

  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
export const CartItemActionInput = styled.input`
  background: transparent;
  border: none;
  color: ${(props) => props.theme['base-title']};
  width: 2rem;
  text-align: center;

  -moz-appearance: textfield;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const CartItemActionInputBtn = styled.span`
  color: ${(props) => props.theme.purple};
  cursor: pointer;
  padding: 0 0.1rem;
  font-family: 'Roboto', sans-serif;

  font-weight: normal;

  :hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CartResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-bottom: 1.5rem;
`
export const CartResumeItem = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0.875rem;
  line-height: 1.3;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};

  &.bold {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: bold;
  }
`
export const BtnSubmitCheckout = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme.yellow};
  border-radius: 6px;
  color: ${(props) => props.theme.white};

  font-size: 0.875rem;
  line-height: 1.6;

  text-transform: uppercase;

  border: none;
  width: 100%;
  padding: 0.75rem;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
