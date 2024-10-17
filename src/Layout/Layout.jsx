import React, { Children, useEffect } from "react";
import Header from "../Home Pages/Header";
import Footer from "../Home Pages/Footer";
import { useNavigate } from "react-router-dom";
import Listings from "../Auth/Listing";
import { useAuthContext } from "../Auth/AuthUser";

function Layout({ children, protect }) {

  const { authUser, setAuthUser } = useAuthContext();

  const navigate = useNavigate()
  async function getCartProducts() {
    const main = new Listings();
    main.profile()
      .then((res) => {
        if(res.data.status){
          setAuthUser(res.data.user)
        }else { 
          setAuthUser(null);
          navigate('/login')
        }
      })
      .catch((err) => { 
        console.log("error in cart Products", err);
        
      });
  }

  useEffect(()=>{
    if(protect){
      getCartProducts();
    }
  },[])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
