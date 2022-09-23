import { createContext, ReactNode } from 'react'

export interface Coffee {
  id: number
  thumbUrl: string
  name: string
  description: string
  price: number
  categories: number[]
}

interface CoffeesContextType {
  coffees: Coffee[]
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const coffees = [
    {
      id: 1,
      thumbUrl: '/assets/coffees/expresso-tradicional.png',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      categories: [1],
    },
    {
      id: 2,
      thumbUrl: '/assets/coffees/expresso-americano.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      categories: [1],
    },
    {
      id: 3,
      thumbUrl: '/assets/coffees/expresso-cremoso.png',
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      categories: [1],
    },
    {
      id: 4,
      thumbUrl: '/assets/coffees/expresso-gelado.png',
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      categories: [1, 5],
    },
    {
      id: 5,
      thumbUrl: '/assets/coffees/cafe-com-leite.png',
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      categories: [1, 3],
    },
    {
      id: 6,
      thumbUrl: '/assets/coffees/latte.png',
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      categories: [1, 3],
    },
    {
      id: 7,
      thumbUrl: '/assets/coffees/capuccino.png',
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      categories: [1, 3],
    },
    {
      id: 8,
      thumbUrl: '/assets/coffees/macchiato.png',
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      categories: [1, 3],
    },
    {
      id: 9,
      thumbUrl: '/assets/coffees/mocaccino.png',
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      categories: [1, 3],
    },
    {
      id: 10,
      thumbUrl: '/assets/coffees/chocolate-quente.png',
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      categories: [2, 3],
    },
    {
      id: 11,
      thumbUrl: '/assets/coffees/cubano.png',
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      categories: [2, 4, 5],
    },
    {
      id: 12,
      thumbUrl: '/assets/coffees/havaiano.png',
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      categories: [2],
    },
    {
      id: 13,
      thumbUrl: '/assets/coffees/arabe.png',
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      categories: [2],
    },
    {
      id: 14,
      thumbUrl: '/assets/coffees/irlandes.png',
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      categories: [2, 4],
    },
  ] as Coffee[]

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
