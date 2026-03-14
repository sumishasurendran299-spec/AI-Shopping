import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../app/cartSlice";
import productReducer from "../app/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  }
});

export default store;