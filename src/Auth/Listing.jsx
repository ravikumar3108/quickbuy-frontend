import { Component } from "react";
import Api from "./Api";

class Listings extends Component {
  async profile() {
    return Api.get(`product/profile`);
  }
  async deleteProduct(id) {
    return Api.post(`product/deleteProduct/${id}`);
  }
  async add_product(data) {
    return Api.post(`product/createProduct`, data);
  }
  async add_cart(id) {
    return Api.post(`product/addtocart/${id}`);
  }

  async get_cart() {
    return Api.get("product/getcartProducts");
  }

  async add_quantity(data) {
    return Api.post(`product/addquantity/${data}`);
  }

  async sub_quantity(data) {
    return Api.post(`product/subquantity/${data}`);
  }

  async remove(data) {
    return Api.post(`product/remove/${data}`);
  }

  render() {
    return <></>;
  }
}

export default Listings;
