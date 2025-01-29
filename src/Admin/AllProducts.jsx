import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../Auth/AuthUser";
import toast, { Toaster } from "react-hot-toast";
import Listings from "../Auth/Listing";
import UpdateProduct from "./UpdateProduct";

function AllProducts() {
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

  async function deleteItem(id) {
    const main = new Listings();
    const response = main.deleteProduct(id);
    response.then((res) => {
      toast.success("Product Remove Succesfully");
      getProducts();
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  const [update, setUpdate] = useState(null);

  return (
    <>
      <Toaster />
      <div className="relative overflow-x-auto w-full p-10">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-white uppercase bg-dark3 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3 flex justify-end">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4">$ {item.price}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4 flex justify-end">
                    <button
                      onClick={() => setUpdate(index)}
                      className="block text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      type="button"
                    >
                      Update
                    </button>
                    {update == index ? (
                      <UpdateProduct
                        item={item}
                        getProducts={getProducts}
                        index={index}
                        setUpdate={setUpdate}
                      />
                    ) : (
                      ""
                    )}
                    <button
                      onClick={() => deleteItem(item._id)}
                      className=" ml-2  block text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllProducts;
