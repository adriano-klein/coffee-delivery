import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout.tsx'
import { Cart } from './components/Cart/index.tsx'
import { Confirmation } from './components/Confirmation/index.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Route>
    </Routes>
  )
}
