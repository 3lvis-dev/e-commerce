import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'
import './style/productDescription.css'

const ProductDescription = ({ productInfo }) => {
  console.log(productInfo)

  const [counter, setCounter] = useState(1)
 
  const handlePlus = () => setCounter(counter + 1)

  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1)
    }
  } 

  const handleAddCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart' 
    const obj = {
      id: productInfo.id,
      quantity: counter
    }
    
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className='product__description-container'>

      <div className='product__description-slider'>
        <h2>Slider</h2>
      </div>

      <div className='product__description-section'>
        <section className='product__description'>
          <h2 className='product__description-name'> {productInfo?.title}</h2>
          <p className='product__description-info'>{productInfo?.description}</p>

          <div className='product__description-body'>
            <article className='product__description-price'>
              <h3 className='product__description-label'>Price</h3>
              <span className='product__description-value'>{productInfo?.price}</span>
            </article>

            <article className='product__description-quantity'>
              <h3 className='product__description-label'>Quantity</h3>
              <div className='product__description-quantity-product'>
                <button className='product__description-quantity-form' onClick={handleMinus}>-</button>
                <div className='product__description-quantity-form'>{counter}</div>
                <button className='product__description-quantity-form' onClick={handlePlus}>+</button>
              </div>
            </article>
          </div>
          <button className='product-info__btn-cart' onClick={handleAddCart} >Add to Cart</button>
        </section>
      </div>

    </div>
  )
}

export default ProductDescription