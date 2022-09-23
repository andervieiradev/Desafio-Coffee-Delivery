import styled from 'styled-components'
import heroBackground from '../../../../assets/hero-background.png'

export const HeroContainer = styled.div`
  width: 100%;
  padding: 5.75rem 0;
  background: ${(props) => props.theme.background} url(${heroBackground}) center
    center/cover no-repeat;
`

export const HeroCenterConteiner = styled.div`
  margin: 0 auto;
  max-width: 72rem;
  padding: 0 1rem;
  align-items: center;

  /* display: flex; */
  gap: 3.5rem;

  display: grid;
  grid-template-columns: 6fr 5fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const HeroTextContainer = styled.div`
  /* flex: 1; */

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const HeroItensListContainer = styled.div`
  margin-top: 2.5rem;
  color: ${(props) => props.theme['base-text']};

  display: grid;
  grid-template-columns: 8fr 10fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;

  align-items: center;

  div {
    align-items: center;
    display: flex;
    gap: 0.75rem;

    span {
      padding: 0.5rem;
      border-radius: 9999px;
      display: flex;
      color: ${(props) => props.theme.white};
      font-weight: bold;
    }
  }
`

export const HeroIconContainer = styled.div`
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

export const HeroIcons = styled.div<iconBackgroundColorProps>`
  span {
    background: ${(props) =>
      props.theme[BACKGROUND_COLOR[props.iconBackgroundColor]]};
  }
`
