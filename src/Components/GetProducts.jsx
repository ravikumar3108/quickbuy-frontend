import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../Home Pages/Products";

function GetProducts() {
  const [products, setProducts] = useState([]);
  console.log(products);
  async function getProducts() {
    const data = await axios
      .get("http://localhost:8000/product/getProduct")
      .then((res) => {
        setProducts(res.data.products);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Products data={products} />
    </>
  );
}

export default GetProducts;
