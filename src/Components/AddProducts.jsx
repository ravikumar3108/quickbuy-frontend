import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../Layout/Layout";

function AddProducts() {
  const [productImg, setProductImg] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    image: productImg,
  });
  function setData(e) {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    const fdata = new FormData();
    fdata.append("image", productImg);
    fdata.append("title", productData.title);
    fdata.append("description", productData.description);
    fdata.append("price", productData.price);
    try {
      // .post("http://localhost:8000/product/createProduct", fdata)
      const product = axios
        .post("https://quickbuy-two.vercel.app/product/createProduct", fdata)
        .then((res) => {
          if (res.data.status === true) {
            toast.success("Product added successfully !!");
          } else {
            toast.error("Failed to add product.");
          }
        });
    } catch (error) {
      console.log("Error in create product", error);
    }
  }

  return (
    <>
      <Toaster />
      <Layout protect={true}>
        <div className="flex justify-center items-center login p-3">
          <div className="w-full p-6 border-red-200 flex flex-col max-w-[590px]">
            <header className="text-center">
              <h2 className="text-white text-[30px] my-3">Create Products</h2>
            </header>
            <form
              action=""
              onSubmit={handleSubmit}
              enctype="multipart/form-data"
            >
              <div className="">
                <input
                  type="text"
                  name="title"
                  onChange={setData}
                  required
                  placeholder="Title"
                  className="input input-bordered w-full max-w-xs rounded-2xl p-3"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="description"
                  onChange={setData}
                  placeholder="Description"
                  className="input input-bordered w-full max-w-xs rounded-2xl p-3"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  onChange={setData}
                  required
                  className="input input-bordered w-full max-w-xs rounded-2xl p-3"
                />
              </div>

              <div>
                <input
                  type="file"
                  name="image"
                  placeholder="Image"
                  required
                  onChange={({ target: { files } }) => {
                    files[0] && setProductImg(files[0]);
                    if (files) {
                      setSelectedImg(URL.createObjectURL(files[0]));
                    }
                  }}
                  className="input input-bordered w-full max-w-xs rounded-2xl p-3"
                />
                {selectedImg ? (
                  <img
                    src={selectedImg}
                    alt={productImg}
                    className="h-96 object-cover input input-bordered w-full max-w-xs rounded-2xl p-3"
                  />
                ) : (
                  <p>
                    {/* <i class="bi bi-cloud-arrow-up-fill"></i>  */}
                    {/* <h6>Upload Picture</h6> */}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="mt-2 px-3 py-2 rounded-2xl text-white text-[20px] text-center bg-main flex items-center m-auto"
              >
                Add to Products
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AddProducts;
