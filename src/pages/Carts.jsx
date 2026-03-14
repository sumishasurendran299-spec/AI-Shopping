
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../app/cartSlice";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6">

      <h1 className="text-2xl mb-4">Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between border p-4 mb-2">

          <h2>{item.name}</h2>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-500 text-white px-3 py-1"
          >
            Remove
          </button>

        </div>
      ))}

    </div>
  )
};

export default Cart;