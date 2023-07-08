import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  return <div className="component">Product Details - {params.id}</div>;
};

export default ProductDetails;
