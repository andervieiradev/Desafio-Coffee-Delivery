import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import heroIcon from '../../../../assets/hero-coffee.png'
import {
  HeroCenterConteiner,
  HeroContainer,
  HeroIconContainer,
  HeroIcons,
  HeroItensListContainer,
  HeroTextContainer,
} from './styles'

export function HeroSection() {
  return (
    <HeroContainer>
      <HeroCenterConteiner>
        <HeroTextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <HeroItensListContainer>
            <HeroIcons iconBackgroundColor="yellow-dark">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </HeroIcons>

            <HeroIcons iconBackgroundColor="base-text">
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </HeroIcons>

            <HeroIcons iconBackgroundColor="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </HeroIcons>

            <HeroIcons iconBackgroundColor="purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </HeroIcons>
          </HeroItensListContainer>
        </HeroTextContainer>

        <HeroIconContainer>
          <img src={heroIcon} alt="" />
        </HeroIconContainer>
      </HeroCenterConteiner>
    </HeroContainer>
  )
}
