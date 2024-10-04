import React from "react";
import Header from "./Header";

function Contact() {
  return (
    <>
      <div className="flex justify-center items-center login p-3" id="contact">
        <div className="w-full p-6 border-red-200 flex flex-col max-w-[590px]">
          <header className="text-center">
            <h3 className="text-white text-[20px] my-3">Contact Us</h3>
            <p className="text-white text-center font-light">
              Email us at <span className="logo">support@quickbuy.co</span> or
              message us here:
            </p>
          </header>
          <form action="" className="mt-4">
            <div className="">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs rounded-2xl p-3"
              />
            </div>
            <div>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs rounded-2xl p-3"
              />
            </div>

            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className=" inp_msg input-bordered w-full p-3 resize rounded-2xl"
                cols="30"
                rows={5}
              ></textarea>
            </div>

            <button className="mt-2 px-3 py-2 rounded-2xl text-white text-[20px] text-center bg-main flex items-center m-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
