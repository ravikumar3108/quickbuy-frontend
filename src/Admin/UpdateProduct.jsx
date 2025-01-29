import React, { useState } from "react";
import axios from "axios";

const UpdateProduct = ({ item, index, setUpdate, getProducts }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [image, setImage] = useState();
  const [rating, setRating] = useState(item.rating);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category);
  const [loading, setLoading] = useState(false);

  async function update_product(type) {
    console.log("update fn");
    setLoading(true);
    axios
      .post(`https://quickbuy-two.vercel.app/product/updateProduct/${type}`, {
        title,
        description,
        image,
        rating,
        price,
        category,
      })
      .then((res) => {
        console.log("rs", res);
        setLoading(false);
        setUpdate(null);
        getProducts();
      })
      .catch((err) => {
        console.log(`fetching err ${err}`);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="modal">
        <div className="updateform">
          <div className="formFields">
            <input
              className="p-2 rounded border-gray-500"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Thumbnail"
              name="image"
              type="file"
              // defaultValue={item.image}
            />
          </div>
          <div className="formFields">
            <input
              className="p-2 rounded border-gray-500"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              name="title"
              type="text"
              defaultValue={item.title}
            />
          </div>
          <div className="formFields">
            <input
              className="p-2 rounded border-gray-500"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              name="description"
              type="text"
              defaultValue={item.description}
            />
          </div>
          <div className="formFields">
            <input
              className="p-2 rounded border-gray-500"
              onChange={(e) => setRating(e.target.value)}
              placeholder="Rating"
              name="rating"
              type="text"
              defaultValue={item.rating}
            />
          </div>
          <div className="formFields">
            <input
              className="p-2 rounded border-gray-500"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              name="price"
              type="text"
              defaultValue={item.price}
            />
          </div>
          <div className="formFields">
            <select
              className="p-2 rounded border-gray-500"
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              name="category"
              type="text"
              defaultValue={item.category}
            >
              <option selected>Select option</option>
              <option value="Furniture">Furniture</option>
              <option value="Elctronics">Elctronics</option>
              <option value="Clothes">Clothes</option>
            </select>
          </div>

          <div className="d-flex justify-center mt-3">
            <button
              onClick={() => update_product(item._id)}
              type="button"
              className="mx-2 focus:outline-none bg-green-600 text-white p-2 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm "
            >
              {loading ? "loading" : "Update"}
            </button>
            <button
              onClick={() => setUpdate(null)}
              className="mx-2 focus:outline-none bg-green-600 text-white p-2 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
