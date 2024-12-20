import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import emptycart from "../../assets/images/empty-cart-logo.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartitems")) || [];
    console.log(cartData);

    setCartItems(cartData);
  }, []);

  // Save updated cart to localStoragef
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cartitems", JSON.stringify(updatedCart));
  };

  // Handle item removal
  const removeItem = (id) => {
    // Find the item to log its details before removal
    const removedItem = cartItems.find((item) => item.id === id);

    // Remove the item from the cart
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);

    // Log the item's stock count (if it exists in the cart)
    if (removedItem) {
      console.log(`Removed item count in stock: ${removedItem.countInStock}`);
    }

    // Show success toast
    toast.success(`Item removed from cart.`);
  };

  // Handle quantity increment
  const incrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        if (item.quantity >= item.countInStock) {
          toast.error(`${item.name} is out of stock`);
          return item; // Return the item unchanged if it's out of stock
        }
        return { ...item, quantity: item.quantity + 1 }; // Increment quantity if not out of stock
      }
      return item; // Return unchanged item for others
    });
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
    console.log("Incremented Cart:", updatedCart); // Debugging
  };

  // Handle quantity decrement
  const decrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
    console.log("Decremented Cart:", updatedCart); // Debugging
  };

  // Calculate total price dynamically
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Handle voucher application (Placeholder logic)
  const handleVoucherApply = (e) => {
    e.preventDefault();
    const voucherCode = e.target.voucher.value;
    if (voucherCode) {
      toast.success("Voucher applied successfully.");
    } else {
      toast.error("Invalid voucher code.");
    }
  };

  return (
    <>
      <section className="bg-pink-900 py-8 antialiased dark:bg-white md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8">
            {cartItems.length === 0 ? (
              <div className="flex w-full items-center flex-col justify-center  ">
                <h1 className="text-pink-700 font-semibold text-2xl  mb-10">
                  "Whoopsie! Your cart is as empty as a ghost town!"
                </h1>
                <img
                  className="h-40 w-40  animate-bounce"
                  src={emptycart}
                  alt="Empty Cart"
                />
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-gray-200 bg-pink-900 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-200 md:p-6"
                  >
                    <div className="flex items-center justify-between space-x-6">
                      <img
                        className="h-20 w-20"
                        src={`http://localhost:8181/${item.image}`}
                        alt={item.name}
                      />

                      <div className="flex-1">
                        <h3 className="text-base font-medium text-pink-900 dark:text-pink-700">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-900 dark:text-gray-900">
                          {item.description}
                        </p>
                        <p className="text-sm text-gray-900 dark:text-gray-900 font-semibold">
                          {item.category?.category_name}
                        </p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-pink-200 dark:border-pink-600 dark:bg-pink-700 dark:hover:bg-pink-600 text-white"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:border-pink-600 dark:bg-pink-700 dark:hover:bg-pink-600 text-white"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-base font-bold text-gray-900 dark:text-gray-700">
                        Rs {item.price * item.quantity}
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:underline dark:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className=" flex min-w-1/2 items-center justify-end w-lg ">
            {cartItems.length > 0 && (
              <div className="mt-6 max-w-lg space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-200 sm:p-8">
                <p className="text-2xl text-center font-bold text-gray-900 dark:text-gray-900">
                  Order Summary
                </p>

                <div className="space-y-4">
                  <dl className="flex items-center justify-between gap-6">
                    <dt className="text-lg font-medium text-gray-600 dark:text-gray-700">
                      Total Price
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900 dark:text-gray-700">
                      Rs {calculateTotalPrice()}
                    </dd>
                  </dl>
                </div>

                <Link
                  to="#"
                  className="w-full flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3 text-lg font-medium text-pink-700 transition duration-300 ease-in-out hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transform hover:scale-105"
                >
                  Proceed to Checkout
                </Link>

                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    or
                  </span>
                  <Link
                    to="/product"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline dark:text-primary-500 transition duration-300 ease-in-out hover:text-primary-800"
                  >
                    Continue Shopping
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <ToastContainer />
      </section>
    </>
  );
};

export default Cart;
