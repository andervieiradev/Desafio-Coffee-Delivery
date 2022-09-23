import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  padding: 2rem 0;
  background: hsla(0, 0%, 100%, 0.5);
  backdrop-filter: blur(10px);

  header {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    max-width: 72rem;
    padding: 0 1rem;
    align-items: center;
  }
`
export const ActionsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationCard = styled.div`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.2rem;

  cursor: not-allowed;

  svg {
    color: ${(props) => props.theme.purple};
  }

  @media (max-width: 600px) {
    display: none;
  }
`
