import { useSelector,useDispatch } from "react-redux"
import { removeFromCart } from "../app/cartSlice"

const Cart = () => {

const {items} = useSelector(s=>s.cart)
const dispatch = useDispatch()

return(

<div className="p-6">

<h1 className="text-2xl mb-4">Cart</h1>

{items.map(item=>(

<div key={item.id} className="flex justify-between border p-4">

<h2>{item.title}</h2>

<p>₹{item.price}</p>

<button
className="bg-red-500 text-white px-3"
onClick={()=>dispatch(removeFromCart(item.id))}
>
Remove
</button>

</div>

))}

</div>

)

}

export default Cart