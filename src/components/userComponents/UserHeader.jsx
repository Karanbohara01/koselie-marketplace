import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { isAuthenticated, signout } from "../../auth";
import mom from "../../assets/images/mom.png";
import { FiLogOut, FiLogIn } from "react-icons/fi";

const UserHeader = () => {
  const [cartItems, setCartItems] = useState([]);
  // Load cart items from localStorage
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartitems")) || [];
    console.log(`cart items: ${cartData}`);

    setCartItems(cartData);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="bg-white dark:bg-gray-100 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl  mx-auto flex justify-between items-center">
          {/* Logo and Profile Image */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-4 p-4 rounded-lg transition-transform transform hover:scale-105 duration-300">
              <img
                src={mom}
                alt="Profile"
                className="h-14 w-14 rounded-full border-4 border-pink-500 shadow-lg"
              />
              <span className="text-2xl font-semibold text-pink-700 hover:text-pink-700 transition-all duration-300">
                Koselie
              </span>
            </div>
          </Link>

          <form className="max-w-md sm:w-40 lg:w-96  md:w-96 mx-auto">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-white border  rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-white dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                placeholder="Search for Koselie"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-pink-500 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-700 dark:hover:bg-pink-700 dark:focus:ring-pink-700"
              >
                Search
              </button>
            </div>
          </form>

          {/* Authentication and Cart */}
          <div className="flex items-center space-x-6">
            {isAuthenticated() && isAuthenticated().user.role === 0 ? (
              <>
                <div className="flex items-center space-x-4">
                  {/* Logout Button */}
                  <button
                    onClick={() =>
                      signout(() => {
                        navigate("/login");
                      })
                    }
                    className="flex items-center justify-center bg-pink-700 text-white hover:bg-pink-800 focus:outline-none rounded-full p-3 transition-all duration-200"
                  >
                    <FiLogOut className="h-6 w-6" />
                  </button>

                  {/* Cart Button */}
                  <Link
                    to="/cart"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-pink-700 dark:hover:bg-pink-500"
                  >
                    <ShoppingCartIcon className="w-5 h-5 text-white" />
                    <span>Cart</span>
                    <span className="ml-2 px-2 py-0.5 text-xs font-semibold text-white bg-pink-700 rounded-full">
                      {cartItems.length}
                    </span>
                  </Link>

                  {/* User Avatar */}
                  <Link to="/profile" className="">
                    <img
                      className="h-14 w-14 rounded-full border-2 border-pink-700 shadow-lg"
                      src="https://api.schoolworkspro.com/uploads/users/732ebd70-b366-448b-a4e2-d492e12e9381.jpg"
                      alt="User Avatar"
                    />
                  </Link>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className="flex items-center justify-center space-x-2 bg-pink-700 text-white hover:bg-pink-800 focus:outline-none rounded-full text-sm px-6 py-3 transition-all duration-300"
                >
                  <FiLogIn className="h-5 w-5" />
                  <span>Login</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Secondary Navigation Bar */}
      <nav className="bg-cyan-200 dark:bg-pink-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:underline"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="text-gray-100 dark:text-white hover:underline"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="text-gray-100 dark:text-white hover:underline"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-100 dark:text-white hover:underline"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UserHeader;
