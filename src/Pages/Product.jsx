import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilterBtn from "./FilterBtn";

function Product({ data, filterBar, filterByCategory, setFilterBar,UserNotLogin,authUser,Cart }) {


  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(data?.image?.data?.data || ""))
  );

  return (
    <>
      <section className="py-8 antialiased dark:bg-gray-900 md:py-6">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <h2 className="mt-3 text-xl font-semibold text-white dark:text-white sm:text-2xl">
                Best Products
              </h2>
            </div>
            {/* btn */}
            <div className="flex items-center space-x-4 relative">
              <FilterBtn
                filterBar={filterBar}
                setFilterBar={setFilterBar}
                filterByCategory={filterByCategory}
              />
            </div>
          </div>

          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-4 xl:grid-cols-4">
            {data &&
              data.map((item) => (
                <div class="rounded-lg border text-white border-gray-200 bg-dark1 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <div class="h-56 w-full">
                    <Link to={`/overview?id=/${item._id}`}>
                      <img
                        class="mx-auto h-full dark:hidden"
                        src={`data:image/;base64,${btoa(
                          String.fromCharCode(
                            ...new Uint8Array(item?.image?.data?.data || "")
                          )
                        )}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="pt-6">
                    <div class="mb-4 flex items-center justify-between gap-4">
                      <span class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        Up to 35% off
                      </span>

                      <div class="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          data-tooltip-target="tooltip-quick-look"
                          class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <span class="sr-only"> Quick look </span>
                          <svg
                            class="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-width="2"
                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                            />
                            <path
                              stroke="currentColor"
                              stroke-width="2"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </button>
                        <button
                          type="button"
                          data-tooltip-target="tooltip-add-to-favorites"
                          class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <span class="sr-only"> Add to Favorites </span>
                          <svg
                            class="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <Link
                      to={`/overview?=/${item._id}`}
                      class="text-lg font-semibold leading-tight text-white hover:underline dark:text-white"
                    >
                      {item.title}
                    </Link>

                    <div class="mt-2 flex items-center gap-2">
                      <div class="flex items-center">
                        <svg
                          class="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          class="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          class="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          class="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          class="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>
                      </div>

                      <p class="text-sm font-medium text-gray-900 dark:text-white">
                        5.0
                      </p>
                      <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        (455)
                      </p>
                    </div>

                    <ul class="mt-2 flex items-center gap-4">
                      <li class="flex items-center gap-2">
                        <svg
                          class="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                          />
                        </svg>
                        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Fast Delivery
                        </p>
                      </li>

                      <li class="flex items-center gap-2">
                        <svg
                          class="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="2"
                            d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                          />
                        </svg>
                        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Best Price
                        </p>
                      </li>
                    </ul>

                    <div class="mt-4 gap-4">
                      <p class=" mb-3 text-2xl font-extrabold leading-tight text-white dark:text-white">
                        $1,699
                      </p>

                      <button
                       onClick={
                        authUser
                          ? () => {
                              Cart(item._id);
                            }
                          : () => {
                              UserNotLogin();
                            }
                      }
                        type="button"
                        class="inline-flex items-center rounded-lg bg-main px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4  focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800"
                      >
                        <svg
                          class="-ms-2 me-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="w-full text-center">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Show more
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
