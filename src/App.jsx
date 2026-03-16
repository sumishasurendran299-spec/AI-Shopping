import Navbar from "./components/Navbar"
import { Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails"
import ProtectedRoute from "./components/ProtectedRoute"

function App(){

return(

<>
<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>

<Route
path="/cart"
element={
<ProtectedRoute>
<Cart/>
</ProtectedRoute>
}
/>

<Route path="/product/:id" element={<ProductDetails/>}/>

</Routes>

</>

)

}

export default App