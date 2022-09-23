import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 6rem;
  grid-row-gap: 2rem;

  margin: 0 auto;
  margin-top: 2.5rem;

  max-width: 72rem;
  padding: 0 1rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    justify-content: end;

    h2 {
      font-size: 2rem;
      line-height: 1.3;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      color: ${(props) => props.theme['yellow-dark']};
    }

    h3 {
      font-size: 1.25rem;
      line-height: 1.3;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: ${(props) => props.theme['base-title']};
    }

    img {
      align-self: center;
      width: 100%;
      max-width: 492px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`

export const SuccessItensListContainer = styled.div`
  margin-top: 1.5rem;
  padding: 2.5rem;
  color: ${(props) => props.theme['base-text']};

  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(prosp) => prosp.theme.yellow},
        ${(prosp) => prosp.theme.purple}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;

  span {
    font-size: 1rem;
  }

  div {
    align-items: center;
    display: flex;
    gap: 0.75rem;

    .icon {
      padding: 0.5rem;
      border-radius: 9999px;
      display: flex;
      color: ${(props) => props.theme.white};
      font-weight: bold;
    }
  }
`

export const SuccessIconContainer = styled.div`
  /* width: 470px; */

  img {
    width: 100%;
  }
`

const BACKGROUND_COLOR = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  'base-text': 'base-text',
  purple: 'purple',
} as const

interface iconBackgroundColorProps {
  iconBackgroundColor: keyof typeof BACKGROUND_COLOR
}

export const SuccessIcons = styled.div<iconBackgroundColorProps>`
  .icon {
    background: ${(props) =>
      props.theme[BACKGROUND_COLOR[props.iconBackgroundColor]]};
  }
`
