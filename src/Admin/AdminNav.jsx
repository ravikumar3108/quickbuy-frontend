import React from "react";
import { Link } from "react-router-dom";

function AdminNav() {
  const handleLogout = () => {
    // localStorage.removeItem("token");
    // navigate("/");
  };

  return (
    <>
      <header
        id="header-admin"
        className="flex items-center h-20 px-6 sm:px-10"
      >
        <div className="mr-6 flex justify-between">
          <h1 className="text-2xl font-semibold mb-2 text-white">
            <Link to={"/admin-dash"}>Dashbaord</Link>
          </h1>
          <Link
            to={"/admin-update"}
            title=""
            className="ml-3 flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            role="button"
          >
            Manage Videos
          </Link>
          <Link
            to={"/admin-addproducts"}
            title=""
            className="ml-3 flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            role="button"
          >
            Add Products
          </Link>
        </div>
        <div className="flex flex-shrink-0 items-center ml-auto">
          <div className="border-l pl-3 ml-3 space-x-1">
            <button
              onClick={handleLogout}
              className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
            >
              <span className="sr-only">Log out</span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default AdminNav;
