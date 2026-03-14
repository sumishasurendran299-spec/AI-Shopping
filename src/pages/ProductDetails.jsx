import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  return (
    <div className="p-2">

      <img src={product.image} className="w-64 mb-4" />

      <h1 className="text-2xl font-bold">{product.name}</h1>

      <p className="text-lg">${product.price}</p>

      <p className="mt-4">
        This is a detailed product description.
      </p>

    </div>
  );
}

export default ProductDetails;