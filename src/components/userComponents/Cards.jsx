import React from "react";
import { Link } from "react-router-dom";
const Cards = (props) => {
  const {
    _id,
    product_name,
    product_image,
    category,
    product_price,
    product_description,
    countInStock,
  } = props.data;
  return (
    <>
      <div class="rounded-lg border border-gray-200  p-2 shadow-sm dark:border-pink-700 dark:bg-gray-100 w-72 h-auto flex flex-col items-center">
        <img
          className="h-72 w-96 object-contain  "
          src={`http://localhost:8181/${product_image}`}
          alt={product_name}
        />

        <div class="pt-6">
          <div class="mb-4 flex items-center justify-between gap-4">
            <span class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-primary-900 dark:text-primary-300">
              Up to 35% off{" "}
            </span>

            <div class="flex items-center justify-end gap-1">
              <button
                type="button"
                data-tooltip-target="tooltip-quick-look"
                class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-pink-900 dark:text-gray-400 dark:hover:bg-pink-700 dark:hover:text-white"
              >
                <span class="sr-only"> Quick look </span>
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="red"
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
              <div
                id="tooltip-quick-look"
                role="tooltip"
                class="tooltip invisible absolute z-10 inline-block rounded-lg bg-pink-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-pink-700"
                data-popper-placement="top"
              >
                Quick look
                <div class="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <button
                type="button"
                data-tooltip-target="tooltip-add-to-favorites"
                class="rounded-lg p-2 text-gray-800 hover:bg-pink-100 hover:text-pink-900 dark:text-gray-800 dark:hover:bg-pink-700 dark:hover:text-white"
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
              <div
                id="tooltip-add-to-favorites"
                role="tooltip"
                class="tooltip invisible absolute z-10 inline-block rounded-lg bg-pink-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-pink-700"
                data-popper-placement="top"
              >
                Add to favorites
                <div class="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>

          <a
            href="#"
            class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-gray-900"
          >
            {product_name}
          </a>
          {/* <a
            href="#"
            class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
          >
            {category.category_name}
          </a> */}

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

            <p class="text-sm font-medium text-gray-900 dark:text-pink-700">
              5.0
            </p>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-900">
              (455)
            </p>
          </div>

          <ul class="mt-2 flex items-center gap-4">
            <li class="flex items-center gap-2">
              <svg
                class="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
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
              <p class="text-sm font-medium text-gray-500 dark:text-gray-900">
                Fast Delivery
              </p>
            </li>

            <li class="flex items-center gap-2">
              <svg
                class="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-900">
                Best Price
              </p>
            </li>
          </ul>

          <div class="mt-4 ">
            <p class="text-lg font-extrabold leading-tight text-gray-900 dark:text-gray-700 mb-5">
              Rs.{product_price}
            </p>
            <p class="text-lg font-extrabold leading-tight text-gray-900 dark:text-gray-700 mb-5">
              {countInStock ? `Stock: ${countInStock}` : "Out of Stock"}
            </p>
            <Link to={`/productdetail/${_id}`}>
              <button
                type="button"
                className="items-center rounded-lg bg-pink-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full flex justify-center"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                View Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;