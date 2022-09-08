import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/ProductDescription'
import SimiliarProducts from '../productDetail/SimiliarProducts'

const ProductDetail = () => {
  //  
  const [productInfo, setProductInfo] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProductInfo(res.data.data.product))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div>
      <NavLink to='/'>
        <span className='product__detail-title'>Home</span>
      </NavLink>

      <span className='product__detail-title'> {productInfo?.title}</span>

      <ProductDescription 
        productInfo={productInfo}
      />
      <SimiliarProducts 
        productInfo={productInfo}
      />
    </div>
  )
}

export default ProductDetail