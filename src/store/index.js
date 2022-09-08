import { configureStore } from "@reduxjs/toolkit";
import produtcSlice from './slices/products.slice'

export default configureStore({
  reducer: {
    produtcSlice
  }
})