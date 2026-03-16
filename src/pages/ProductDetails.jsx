import { useParams } from "react-router-dom"
import products from "../data/products"

const ProductDetails = () => {

const {id} = useParams()

const product = products.find(p=>p.id===Number(id))

return(

<div className="p-6">

<img src={product.image} className="w-60"/>

<h1 className="text-2xl">{product.title}</h1>

<p>${product.price}</p>

<p>Rating: {product.rating}</p>

</div>

)

}

export default ProductDetails