import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import './style/similarProducts.css'

const SimiliarProducts = ({ productInfo }) => {
  const [filterProducts, setFilterProducts] = useState()
  const products = useSelector(state => state.produtcSlice)

  useEffect(() => {
    if ( productInfo ) {
      const filter = products.filter((e) => e.category.name === productInfo.category)
      setFilterProducts(filter)
      
    } else {
      
    }
  }, [productInfo])
  
  return (
    <div className='similiar__products-container'>
      <h2 className='similiar__products-title'>Discover similar items</h2>
      <div className='similar__products-cards'>
        {
          filterProducts?.map(product => {
            if (products.title !== productInfo.title) {
              return <CardHome key={product.id} product={product} />
            }
          })
        }
      </div>
    </div>
  )
}

export default SimiliarProducts