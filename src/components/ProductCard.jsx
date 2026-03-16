import { addToCart } from "../app/cartSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const ProductCard = ({product}) => {

const dispatch = useDispatch()

return(

<div className="border p-2 rounded ">

<img src={product.image} />

<h2 className="font-bold">{product.title}</h2>

<p>${product.price}</p>

<Link to={`/product/${product.id}`}>
View Details
</Link>

<button
onClick={()=>dispatch(addToCart(product))}
className="bg-blue-500 text-white p-2 mt-2 w-full"
>
Add to Cart
</button>

</div>

)

}

export default ProductCard