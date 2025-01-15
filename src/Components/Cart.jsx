import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import img from "../Images/cart.jpg";
import axios from "axios";
import Listings from "../Auth/Listing";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [load, setLoad] = useState(true);
  console.log(cartData);
  async function getCartProducts() {
    const main = new Listings();
    main
      .get_cart()
      .then((result) => {
        setCartData(result.data.userProducts);
        setLoad(false);
      })
      .catch((err) => {
        console.log("error in cart Products", err);
        setLoad(false);
      });
  }

  useEffect(() => {
    getCartProducts("load");
  }, []);

  const ITEM = ({ item }) => {
    const [quantity, setquantity] = useState(item.quantity);
    const base64String = btoa(
      String.fromCharCode(
        ...new Uint8Array(item?.item?.image?.data?.data || "")
      )
    );
    async function addQuantity(id) {
      setquantity(quantity + 1);
      const main = new Listings();
      const response = main.add_quantity(id);
      response
        .then((res) => {
          console.log(res);
        })
        .catch(() => {
          setquantity(quantity - 1);
        });
    }

    async function subQuantity(id) {
      const main = new Listings();
      setquantity(quantity - 1);
      const response = main.sub_quantity(id);
      response
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          setquantity(quantity + 1);
        });
    }

    async function removeItem(id) {
      const main = new Listings();
      const response = main.remove(id);
      response.then((res) => {
        console.log(res);
        toast.success("Remove an item");
        getCartProducts();
      });
    }
    return (
      <>
        <li className="xl:flex justify-between p-3 border border-red-50 rounded-xl mt-4">
          <div className="flex m-auto w-full xl:w-2/4">
            <img
              className="w-full rounded-lg sm:w-40"
              src={`data:image/;base64,${base64String}`}
              alt=""
            />
            <div className="ml-4 hidden xl:block sm:block">
              <h4 className="text-white">Title : {item.item.title}</h4>
              <p>Description : {item.item.description}</p>
            </div>
          </div>

          <div className="flex m-auto mt-10 xl:w-2/5">
            <div className="flex justify-between">
              <button
                className="p-2 rounded-md bg-main text-white m-2 h-10"
                onClick={() => {
                  addQuantity(item._id);
                }}
              >
                <IoIosAdd />
              </button>
              <h3 className="p-2 px-3 rounded-md bg-main text-white m-2 h-10">
                {quantity}
              </h3>
              <button
                className="p-2 rounded-md bg-main text-white m-2 h-10"
                onClick={() => {
                  subQuantity(item._id);
                }}
              >
                <FiMinus />
              </button>
            </div>
            <div className="flex justify-between sm:m-auto">
              <button
                className="p-2 rounded-md bg-main text-white m-2 h-10"
                onClick={() => {
                  removeItem(item._id);
                }}
              >
                <MdDelete />
              </button>
              <h3 className="text-center xl:pt-4 sm:pt-4 pt-4">
                Price : ${item.item.price * quantity}
              </h3>
            </div>
          </div>
        </li>
      </>
    );
  };

  return (
    <>
      <Layout protect={true}>
        <Toaster />
        <div id="cart" style={{ width: "80%", margin: "auto" }}>
          <div className="container m-auto my-10">
            <div className="bg-dark1 rounded-2xl p-3  m-auto">
              <h2 className="text-white text-center text-xl">Cart</h2>
              {load ? (
                <h2 className="w-full text-gray-400 text-center p-6">
                  Loading ...
                </h2>
              ) : (
                <ul className="my-3">
                  {cartData && cartData.length > 0
                    ? cartData.map((item) => {
                        return <ITEM item={item} />;
                      })
                    : ""}

                  {!load && cartData && cartData.length < 1 ? (
                    <>
                      <h2 className="text-center text-xl">
                        Your Shopping Cart Is Empty....!
                      </h2>

                      <div className="text-white text-8xl flex justify-center p-4">
                        <MdOutlineRemoveShoppingCart />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </ul>
              )}
              <Link to={"/checkout"}>
                <p className="text-center bg-main rounded-xl p-2 text-white">Checkout</p>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Cart;
