/* eslint-disable prettier/prettier */
import { useContext, useState } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import {
  ShowcaseContainer,
  ShowcaseHeaderContainer,
  ShowcaseListItemsContainer,
} from './style'

import { CoffeeItem } from './componentes/CoffeeItem'
import { CategoriesContext } from '../../../../contexts/CategoriesContext'

export function Showcase() {
  const { coffees } = useContext(CoffeesContext)
  const { categories } = useContext(CategoriesContext)

  const [filterIds, setFilterIds] = useState<number[]>([])

  const coffeesFiltered =
    filterIds.length > 0
      ? coffees.filter(
        (coffee) =>
          coffee.categories.filter((item) => filterIds.includes(item))
            .length > 0,
      )
      : coffees

  function handleFilterCoffees(id: number) {
    const newIds = filterIds

    if (newIds.includes(id)) {
      newIds.splice(newIds.indexOf(id), 1)
    } else {
      newIds.push(id)
    }

    setFilterIds([...newIds])
  }

  return (
    <ShowcaseContainer>
      <ShowcaseHeaderContainer>
        <h2>Nossos cafés:</h2>

        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleFilterCoffees(category.id)}
              className={`${filterIds.includes(category.id) ? 'selected' : ''}`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </ShowcaseHeaderContainer>
      <ShowcaseListItemsContainer>
        {coffeesFiltered.map((coffee) => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </ShowcaseListItemsContainer>
    </ShowcaseContainer>
  )
}
