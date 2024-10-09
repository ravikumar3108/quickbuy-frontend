import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function Signup() {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(signup);

  function getValue(e) {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await axios
      .post("https://quickbuy-two.vercel.app/users/signup", signup)
      .then((res) => {
        console.log(res);
        console.log(res.data.status);
        if (res.data.status === false) {
          toast.error("User Already Registered");
        } else if (res.data.status === true) {
          toast.success("Create Account succesfull");
        } else {
          toast.error("Something went wrong!....");
        }
      });
  }

  return (
    <>
      <Toaster />
      <div className="h-screen flex justify-center items-center login p-3 py-3">
        <div className="w-full p-6 border-red-200 flex flex-col max-w-[590px]">
          <header className="text-center">
            <h1 className="logo text-[35px] font-bold">QuickBuy</h1>
            <h3 className="text-white text-[20px] my-3">
              Signup into quickbuy
            </h3>
          </header>
          <form action="" onSubmit={handleSubmit}>
            <div className="my-5">
              <input
                type="text"
                name="name"
                onChange={getValue}
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs rounded-2xl p-3"
              />
            </div>
            <div className="my-5">
              <input
                type="text"
                name="email"
                onChange={getValue}
                placeholder="Email"
                className="input input-bordered w-full max-w-xs rounded-2xl p-3"
              />
            </div>
            <div>
              <input
                type="text"
                name="password"
                onChange={getValue}
                placeholder="Password"
                className="input input-bordered w-full max-w-xs rounded-2xl p-3"
              />
            </div>

            <button
              type="submit"
              className="mt-3 px-3 py-2 rounded-2xl text-white text-[20px] text-center bg-main flex items-center m-auto"
            >
              Sign Up Now
            </button>
            <p className="flex justify-center m-auto mt-3">
              <Link to="/login" className="text-white">
                Already an Account?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
