import { createSlice } from "@reduxjs/toolkit"
import products from "../data/products"

const productSlice = createSlice({

name:"products",

initialState:{
products:products,
search:"",
category:"all"
},

reducers:{

setSearch:(state,action)=>{
state.search = action.payload
},

setCategory:(state,action)=>{
state.category = action.payload
}

}

})

export const {setSearch,setCategory} = productSlice.actions
export default productSlice.reducer