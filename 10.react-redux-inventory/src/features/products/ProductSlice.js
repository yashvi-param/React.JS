import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/ProductSlice";

const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});

export default store;