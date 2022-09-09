import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductByCategory } from '../../store/slices/products.slice'


const CategoryFilter = () => { 

  const [categories, setCategory] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'

    axios.get(URL)
      .then(res => setCategory(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])
  
  // console.log(categories)

  const dispatch = useDispatch()

  const handleClickCategory = (id) => {
    dispatch(getProductByCategory(id))
  }

  const handleClickAllProducts = () => {
    dispatch(getAllProducts())
  }

  return (
    <div>
      <h3>Category</h3>
      <ul>
        <li onClick={handleClickAllProducts}>All Products</li>
        {/* <li onClick={() => handleClickCategory(category.id)} >All Products</li> */}
        {
          categories?.map(category => (
            <li  onClick={() => handleClickCategory(category.id)} key={category.id}>
              {category.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CategoryFilter