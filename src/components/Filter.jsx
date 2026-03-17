import { useDispatch } from "react-redux"
import { setCategory } from "../app/productSlice"

const Filter = () => {

const dispatch = useDispatch()

return (

<div className="flex gap-2 mb-2 text-xl">

      <button onClick={()=>dispatch(setCategory("all"))}>
        All
      </button>

      <button onClick={()=>dispatch(setCategory("electronics"))}>
        Electronics
      </button>

      <button onClick={()=>dispatch(setCategory("fashion"))}>
        Fashion
      </button>

        <button onClick={()=>dispatch(setCategory("shoes"))}>
        Shoes
      </button>

        <button onClick={()=>dispatch(setCategory("beauty"))}>
        Beauty
      </button>

        <button onClick={()=>dispatch(setCategory("grocery"))}>
        Grocery
      </button>

    </div>

)
}

{/* <select
className=" border p-2 mb-4"
onChange={(e)=>dispatch(setCategory(e.target.value))}
>


<option value="all">All</option>
<option value="electronics">Electronics</option>
<option value="fashion">Fashion</option>
<option value="shoes">Shoes</option>
<option value="beauty">Beauty</option>


</select> */}






export default Filter