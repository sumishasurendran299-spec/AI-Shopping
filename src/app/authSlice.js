import { createSlice } from "@reduxjs/toolkit"

const userData = JSON.parse(localStorage.getItem("user"))

const authSlice = createSlice({

name:"auth",

initialState:{
user:userData || null,
isAuthenticated:userData?true:false
},

reducers:{

register:(state,action)=>{
localStorage.setItem("user",JSON.stringify(action.payload))
state.user = action.payload
state.isAuthenticated=true
},

login:(state,action)=>{

const storedUser = JSON.parse(localStorage.getItem("user"))

if(
storedUser &&
storedUser.email === action.payload.email &&
storedUser.password === action.payload.password
){
state.user = storedUser
state.isAuthenticated=true
}else{
alert("Invalid email or password")
}

},

logout:(state)=>{
localStorage.removeItem("user")
state.user=null
state.isAuthenticated=false
}

}

})

export const {register,login,logout} = authSlice.actions
export default authSlice.reducer