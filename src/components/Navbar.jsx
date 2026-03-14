
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="bg-blue-600 text-white  flex justify-between p-4">
      <Link to="/" className="text-xl font-bold">
        ShopSmart
      </Link>


      


      <Link to="/cart">
        Cart ({cartItems.length})
      </Link>
    </div>

     
  )   

};

export default Navbar;