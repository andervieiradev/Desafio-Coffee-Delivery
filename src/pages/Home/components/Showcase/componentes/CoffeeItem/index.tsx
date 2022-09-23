import { useContext, useState } from 'react'
import { Coffee } from '../../../../../../contexts/CoffeesContext'

import {
  ShowcaseItem,
  ShowcaseItemAction,
  ShowcaseItemActionBtnCart,
  ShowcaseItemActionContainer,
  ShowcaseItemActionInput,
  ShowcaseItemActionInputBtn,
  ShowcaseItemInfo,
} from '../../style'

import { ShoppingCart } from 'phosphor-react'
import { CategoriesContext } from '../../../../../../contexts/CategoriesContext'
import { CartContext } from '../../../../../../contexts/CartContext'

interface CoffeeItemProps {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const { categories } = useContext(CategoriesContext)
  const { handleAddCartItem } = useContext(CartContext)

  const [countItem, setCountItem] = useState(1)

  function handleChangeItem(value: number) {
    if (value > 0 && value <= 10) {
      setCountItem(value)
    }
  }

  return (
    <ShowcaseItem>
      <img src={coffee.thumbUrl} width="120px" height="120px" alt="" />
      <ul>
        {categories
          .filter((category) => coffee.categories.includes(category.id))
          .map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
      </ul>

      <ShowcaseItemInfo>
        <h1>{coffee.name}</h1>
        <span>{coffee.description}</span>
      </ShowcaseItemInfo>

      <ShowcaseItemAction>
        <span>
          <small>R$</small>{' '}
          {coffee.price.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
          })}
        </span>
        <ShowcaseItemActionContainer>
          <div>
            <ShowcaseItemActionInputBtn
              onClick={() => handleChangeItem(countItem - 1)}
            >
              -
            </ShowcaseItemActionInputBtn>
            <ShowcaseItemActionInput
              min={1}
              max={10}
              value={countItem}
              onChange={(e) => handleChangeItem(Number(e.target.value))}
              type="number"
            />
            <ShowcaseItemActionInputBtn
              onClick={() => handleChangeItem(countItem + 1)}
            >
              +
            </ShowcaseItemActionInputBtn>
          </div>
          <ShowcaseItemActionBtnCart
            onClick={() => handleAddCartItem(coffee.id, countItem)}
          >
            <ShoppingCart size={22} weight="fill" />
          </ShowcaseItemActionBtnCart>
        </ShowcaseItemActionContainer>
      </ShowcaseItemAction>
    </ShowcaseItem>
  )
}
