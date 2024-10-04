import { Component } from "react";
import Api from "./Api";

class Listings extends Component {
  async add_cart(id) {
    return Api.post(`product/addtocart/${id}`);
  }

  async get_cart() {
    return Api.get("product/getcartProducts");
  }

  // async add_quantity(data) {
  //   return Api.put(`/cart/addquantity/${data}`);
  // }

  // async sub_quantity(data) {
  //   return Api.put(`/cart/subquantity/${data}`);
  // }

  // async remove(data) {
  //   return Api.post(`/cart/remove/${data}`);
  // }

  render() {
    return <></>;
  }
}

export default Listings;
