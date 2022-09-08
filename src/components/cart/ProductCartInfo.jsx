import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'
import './style/productCartInfo.css'


const ProductCartInfo = ({ product, getAllProductsCart }) => {

  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(() => getAllProductsCart())
      .catch(err => console.log(err))
  }

  return (
    <article className='cart__item'>
      <header className='cart__item-header'>
        <div className='cart__item-header-content'>
          <h4 className='cart__category'>{product.brand}</h4>
          <h3 className='cart__name'>{product.title}</h3>
        </div>
        <div className='cart__item-conteiner-trash'>
          <i onClick={handleDeleteProduct} className='bx bxs-trash cart__trash'></i>
        </div>
      </header>

      <footer className='cart__item-footer'>
        <div className='cart__item-footer-quantity'>
          <span className='cart__quantity'>{product.productsInCart.quantity}</span>
        </div>
        <div className='cart__item-footer-pay'>
          <span className='cart__total-label'>Price:</span>
          <span className='cart__total-number'>${ product.price }</span>
        </div>
      </footer>
    </article>
  )
}

export default ProductCartInfo