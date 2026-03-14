
import { useDispatch } from "react-redux";
import { addToCart } from "../app/cartSlice";

function ProductCard({product}) {

  const dispatch = useDispatch();

  return (

    <div className="bg-white p-4 rounded shadow hover:shadow-lg">

      <img
        src={product.image}
        className="h-40 w-full object-contain"
      />

      <h2 className="mt-2 font-semibold">
        {product.name}
      </h2>

      <p className="text-green-600">
        ₹{product.price}
      </p>

      <button
        onClick={()=>dispatch(addToCart(product))}
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>

    </div>

  )
};

export default ProductCard;