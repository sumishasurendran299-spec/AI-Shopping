import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../app/productSlice";

function Filter() {
  const dispatch = useDispatch();

  return (
    <select
      className="border p-2"
      onChange={(e) => dispatch(setCategory(e.target.value))}
    >
      <option>All</option>
      <option>Shoes</option>
      <option>Electronics</option>
      <option>Clothing</option>
      <option>Jewellery</option>
      <option>Home-Appliances</option>
      
        {/* <div className="text-black font-bold">
          <Link to="/" Electronics></Link>
            <Link to="/" Shoes></Link>
              <Link to="/" Clothing></Link>
                <Link to="/" Jewllery></Link>
                  <Link to="/" Home-Appliances></Link>
                  </div> */}
    </select>
  )
};

export default Filter;