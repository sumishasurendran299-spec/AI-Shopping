import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { logout } from "../app/authSlice"

const Navbar = () => {

const cart = useSelector(s=>s.cart.items)
const {isAuthenticated} = useSelector(s=>s.auth)
const dispatch = useDispatch()

return(

<div className="bg-blue-600 text-white p-4 flex justify-between">

<Link to="/">ShopSmart</Link>

<div className="flex gap-5">

<Link to="/cart">Cart ({cart.length})</Link>

{!isAuthenticated && (
<>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
</>
)}

{isAuthenticated && (
<button onClick={()=>dispatch(logout())}>
Logout
</button>
)}

</div>

</div>

)

}

export default Navbar