import React from "react";
import { Link } from "react-router-dom";

function Checkout({cartData}) {
  
  return (
    <>
      <div id="cart" style={{ width: "80%", margin: "auto" }}>
        <div className="container m-auto my-10">
          <div className="bg-dark1 rounded-2xl p-3 m-auto flex justify-around">
                <div className="left">
                    <h4>Delivery Info</h4>
                    <p>Name </p>
                    <p>Flat No</p>
                    <p>Pincode</p>
                </div>
                <div className="rgt">
                    <h3>SubTotal : 787</h3> 
                    <Link to={"/payment"}>Checkout</Link>    
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
