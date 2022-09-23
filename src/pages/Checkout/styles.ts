import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 2rem;
  grid-row-gap: 1.5rem;

  margin: 0 auto;
  margin-top: 2.5rem;

  max-width: 72rem;
  padding: 0 1rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h2 {
      font-size: 1.125rem;
      line-height: 1.3;
      font-family: 'Baloo 2', sans-serif;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`
