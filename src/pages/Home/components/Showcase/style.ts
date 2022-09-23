import styled from 'styled-components'

export const ShowcaseContainer = styled.div`
  margin: 0 auto;
  max-width: 72rem;
  padding: 0 1rem;
  align-items: center;
`

export const ShowcaseHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  .selected {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
  }

  h2 {
    font-size: 2rem;
    line-height: 1.3;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    display: flex;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: end;

    li {
      list-style: none;
      padding: 0.375rem 0.75rem;
      border-radius: 100px;
      color: ${(props) => props.theme['yellow-dark']};
      border: 1px solid ${(props) => props.theme.yellow};
      line-height: 1.3;
      font-size: 0.625rem;
      text-transform: uppercase;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      cursor: pointer;
    }

    li:hover {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    ul {
      width: 100%;
      align-items: center;
      justify-content: end;
    }
  }
`

export const ShowcaseListItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;

  margin-top: 1.25rem;
  margin-bottom: 8rem;

  @media (max-width: 428px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }

  @media (min-width: 428px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`
export const ShowcaseItem = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  height: 310px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem 1.25rem 1.25rem;

  img {
    margin-top: -1.5rem;
  }

  ul {
    margin: 0;
    padding: 0;

    display: float;
    gap: 0.25rem;

    li {
      list-style: none;
      border-radius: 9999px;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      line-height: 1.3;
      font-size: 0.625rem;
      font-weight: bold;
      padding: 0.25rem 0.5rem;
    }
  }
`
export const ShowcaseItemInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    margin: 0 auto;
    max-width: 90%;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  span {
    margin: 0 auto;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    max-width: 90%;
  }
`

export const ShowcaseItemAction = styled.div`
  height: 2.375rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;

    small {
      font-weight: normal;
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
    }
  }

  div {
    display: flex;
  }
`
export const ShowcaseItemActionContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;

  div {
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    padding: 0.25rem 0.5rem;
  }
`

export const ShowcaseItemActionBtnCart = styled.span`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.white};
  }

  :hover {
    background: ${(props) => props.theme.purple};
  }
`
export const ShowcaseItemActionInput = styled.input`
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

export const ShowcaseItemActionInputBtn = styled.span`
  color: ${(props) => props.theme.purple};
  cursor: pointer;
  padding: 0 0.1rem;
  font-family: 'Roboto', sans-serif;

  font-weight: normal;

  :hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
