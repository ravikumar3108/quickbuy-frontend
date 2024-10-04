import React from "react";
import product_img1 from "../Images/product-01.jpg.webp";
import axios from "axios";
import Listings  from "../Auth/Listing";

function Products({ data }) {
  const Cart = async (id) => {
    const main = new Listings();
    const response = main.add_cart(id);
    response.then((res) => {
      console.log(res);
    });
  };

  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(data?.image?.data?.data || ""))
  );

  return (
    <>
      <div id="products">
        {/* sm md lg xl */}
        <div className="container m-auto">
          <div className="product grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-32">
            {data &&
              data.map((item, i) => {
                return (
                  <>
                    <div className=" pr-item overflow-hidden">
                      <div className="bg-dark1  border-2 overflow-hidden  transition-shadow duration-300 ease-in-out  border-gray-200 border-opacity-60 rounded-2xl ">
                        <div className="flex justify-center cursor-pointer">
                          <img
                            className="rounded-2xl w-full h-96 p-2 object-cover"
                            src={`data:image/;base64,${btoa(
                              String.fromCharCode(
                                ...new Uint8Array(item?.image?.data?.data || "")
                              )
                            )}`}
                            alt="blog"
                          />
                        </div>
                        <div className="p-5 border-t-2 text-white pr-cont bg-dark3">
                          <h2 className="tracking-widest title-font mb-1">
                            {item.title}
                          </h2>
                          <div className="flex justify-between">
                            <p className="leading-relaxed mb-3">
                              Price : {item.price}
                            </p>
                            <p className="leading-relaxed mb-3">Rating : 4.3</p>
                          </div>
                          <div className="flex justify-center">
                            <button
                              onClick={() => {
                                Cart(item._id);
                              }}
                              type="button"
                              className="ml-1 text-white bg-main hover:bg-main focus:ring-4 font-medium rounded-lg text-sm w-full  py-2"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
