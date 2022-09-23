import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CoffeesContextProvider } from './contexts/CoffeesContext'
import { CategoriesContextProvider } from './contexts/CategoriesContext'
import { CartContextProvider } from './contexts/CartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <CategoriesContextProvider>
            <CartContextProvider>
              <Router />
            </CartContextProvider>
          </CategoriesContextProvider>
        </CoffeesContextProvider>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
