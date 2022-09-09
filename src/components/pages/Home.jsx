import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import CategoryFilter from '../home/CategoryFilter'
import InputSearch from '../home/InputSearch'
import PriceFilter from '../home/PriceFilter'
import './style/home.css'

const Home = () => {
  // Estado Global
  const products = useSelector(state => state.produtcSlice)

  const [inputSearch, setInputSearch] = useState('')
  const [filterProducts, setFilterProducts] = useState()
  const [objFilterPrice, setObjFilterPrice] = useState({})

  // Filtro por categoria
  useEffect(() => {

    if (inputSearch.length !== 0) {
      const filter = products?.filter(e => e.title.toLowerCase().includes(inputSearch.toLowerCase()))
      setFilterProducts(filter)
    } else {
      setFilterProducts('')
    }
    
  }, [inputSearch])

  // Filtro por price
  useEffect(() => {
    const filter = products?.filter(product => {
      const price = parseInt(product.price)
      const min = objFilterPrice.from
      const max = objFilterPrice.to

      if (min && max) {
        return min <= price && price <= max
      } else if (min && !max) {
        return min <= price
      } else if (!min && max) {
        return price <= max
      } else {
        return true
      }
    })
    setFilterProducts(filter)
  }, [objFilterPrice.to, objFilterPrice.from])

  
  return (
    <main className='home'>
      {/* <InputSearch  setInputSearch={setInputSearch} />
      <CategoryFilter />
      <PriceFilter setObjFilterPrice={setObjFilterPrice} /> */}
      <div className='home__container'>
        {
          filterProducts ? 
            filterProducts?.map((product) => (
              <CardHome 
                key={product.id}
                product={product}
              />
            ))
          :
          products?.map((product) => (
            <CardHome 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home