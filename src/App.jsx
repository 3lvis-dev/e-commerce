import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import ProductDetail from './components/pages/ProductDetail'
import Login from './components/pages/Login'
import Purchases from './components/pages/Purchases'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Cart from './components/pages/Cart'
import ProtectedRoutes from './components/pages/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'
import { useEffect } from 'react'

function App() { 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/login' element={<Login />}/>
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route element={ <ProtectedRoutes /> } >
          <Route path='/purchases' element={<Purchases />}/>  
          <Route path='/cart/' element={ <Cart /> } />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
