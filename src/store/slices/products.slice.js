import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const produtcSlice = createSlice({
  name: 'products',
  initialState: null,
  reducers: {
    setProducts: (state, action) => action.payload
  }
})

export const { setProducts } = produtcSlice.actions
export default produtcSlice.reducer

export const getAllProducts = () => (dispatch) => {
  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'

  axios.get(URL)
    .then(res => dispatch(setProducts(res.data.data.products)))
    .catch(err => console.log(err))
}

// Petición por categoria
export const getProductByCategory = (id) => (dispatch) => {
  const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`

  axios.get(URL)
    .then(res => dispatch(setProducts(res.data.data.products)))
    .catch(err => console.log(err))
} 