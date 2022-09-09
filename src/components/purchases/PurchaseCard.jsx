import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductPurchase from './ProductPurchase'
import './style/purchaseCard.css'

const PurchaseCard = ({ purchase }) => {
  // const navigate = useNavigate()

  // const handleClick = () => {
  //   navigate(`/product/${purchase.id}`)
  // }

  // onClick={handleClick}

  return (
    <article  className='card__purchase'>
      <header className='card__purchase-header'>
        <p className='card__purchase-date'>{purchase.createdAt}</p>
      </header>
      <ul className='card__purchase-body'>
        {
          purchase.cart.products.map(product => (
            <ProductPurchase 
              key={product.id}
              product={product}
            />
          ))
        }
      </ul>

    </article>
  )
}

export default PurchaseCard