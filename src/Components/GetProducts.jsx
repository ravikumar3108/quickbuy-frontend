import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Pages/Product";
import { useAuthContext } from "../Auth/AuthUser";
import Listings from "../Auth/Listing";
import toast from "react-hot-toast";

function GetProducts() {
  const [products, setProducts] = useState([]);
  const [filterBar, setFilterBar] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const { authUser } = useAuthContext();

  const UserNotLogin = () => {
    toast("Required Login");
  };

  const filterByCategory = (category) => {
    const videosCategory = products.filter(
      (item) => item.category === category
    );
    setFilterProduct(videosCategory);
    setFilterBar(false);
  };

  async function getProducts() {
    const data = await axios
      .get("https://quickbuy-two.vercel.app/product/getProduct")
      .then((res) => {
        setProducts(res.data.products);
        setFilterProduct(res.data.products);
      });
  }

  const Cart = async (id) => {
    const main = new Listings();
    const response = main.add_cart(id);
    response.then((res) => {
      if (res.data.status == true) {
        toast.success("Added");
      }
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Product
        data={products}
        filterBar={filterBar}
        setFilterBar={setFilterBar}
        filterByCategory={filterByCategory}
        authUser={authUser}
        UserNotLogin={UserNotLogin}
        Cart={Cart}
      />
    </>
  );
}

export default GetProducts;
