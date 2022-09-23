import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CartContext } from './contexts/CartContext'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  const { cart } = useContext(CartContext)

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout"
          element={cart.length < 1 ? <Navigate to="/" /> : <Checkout />}
        />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
