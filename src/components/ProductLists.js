import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const ProductLists = () => {
  const [SearchParams] = useSearchParams();
  console.log(SearchParams.get("q")); //type products?q=react in url
  console.log(
    SearchParams.get("keyword"),
    SearchParams.get("instock"),
    SearchParams.get("rating")
  ); ///products?keyword=react&instock=true&rating=4#

  const location = useLocation();
  console.log(location); //where you are
  return <div className="component">Products Lists</div>;
};

export default ProductLists;
