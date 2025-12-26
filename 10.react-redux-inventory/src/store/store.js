import { configureStore } from '@reduxjs/toolkit'
import inventoryReducer from '../features/product/productSlice'

export const store = configureStore({
  reducer: {
    inventory: productslice,
  },
})



export default store;






