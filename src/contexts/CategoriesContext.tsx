import { createContext, ReactNode } from 'react'

export interface Category {
  id: number
  name: string
}

interface CategoriesContextType {
  categories: Category[]
}

export const CategoriesContext = createContext({} as CategoriesContextType)

interface CategoriesContextProviderProps {
  children: ReactNode
}

export function CategoriesContextProvider({
  children,
}: CategoriesContextProviderProps) {
  const categories = [
    {
      id: 1,
      name: 'Tradicional',
    },
    {
      id: 2,
      name: 'Especial',
    },
    {
      id: 3,
      name: 'Com Leite',
    },
    {
      id: 4,
      name: 'Alcoólico',
    },
    {
      id: 5,
      name: 'Gelado',
    },
  ] as Category[]

  return (
    <CategoriesContext.Provider
      value={{
        categories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}
