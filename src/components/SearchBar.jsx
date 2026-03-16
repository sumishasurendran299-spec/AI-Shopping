import { useDispatch } from "react-redux"
import { setSearch } from "../app/productSlice"

const SearchBar = () => {

const dispatch = useDispatch()

return(

<input
className="border p-2 mb-4 "
placeholder="Search products..."
onChange={(e)=>dispatch(setSearch(e.target.value))}
/>

)

}

export default SearchBar