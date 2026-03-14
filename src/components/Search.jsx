
import { useDispatch } from "react-redux";
import { setSearch } from "../app/productSlice";

function Search() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search products..."
      className="border p-2 w-full"
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  )
};

export default Search;