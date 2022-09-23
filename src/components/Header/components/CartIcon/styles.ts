import styled from 'styled-components'

export const CartIconContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border-radius: 6px;
  padding: 0.5rem;
  font-size: 0.875rem;
  display: flex;
  position: relative;

  align-items: center;
  justify-content: center;

  span {
    display: flex;
    position: absolute;
    top: -10px;
    right: -10px;

    padding: 0.2rem 0.4rem;
    border-radius: 9999px;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    font-size: 0.75rem;
    font-weight: bold;

    align-items: center;
    justify-content: center;
  }
`
