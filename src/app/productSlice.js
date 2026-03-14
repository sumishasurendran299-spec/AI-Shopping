import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: products,
    search: "",
    category: "All",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },
    
  }
});

export const { setSearch, setCategory } = productSlice.actions;

export default productSlice.reducer;