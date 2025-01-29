import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";
import AdminNav from "./AdminNav";
import AllProducts from "./AllProducts";

const DashboardLayout = () => {
  const navigate = useNavigate();
 

  return (
    <section className="flex md:bg-gray-100 min-h-screen overflow-hidden body">
      <div className="flex-grow text-gray-800">
        <AdminNav/>
        <main className="space-y-6 ">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <AllProducts/>
          </div>
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
