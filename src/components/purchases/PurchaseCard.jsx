import React from 'react'
import ProductPurchase from './ProductPurchase'

const PurchaseCard = ({ purchase }) => {

  console.log(purchase)

  return (
    <article className='card__purchase'>
      <header>
        <h3 className='card__purchase-date'> {purchase.createAt} </h3>
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