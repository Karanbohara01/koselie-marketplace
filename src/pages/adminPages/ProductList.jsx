import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { isAuthenticated } from "../../auth";
import { FaTrashAlt } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductList = () => {
  const { token } = isAuthenticated();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/productlist`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  // delete product
  const deleteProduct = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      axios
        .delete(`/api/deleteproduct/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success("Product deleted!");
          setProduct(product.filter((p) => p._id !== id));
        })
        .catch((err) => toast.error("Failed to delete!"));
    }
  };

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg mt-6 mx-4">
        <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs  uppercase bg-gradient-to-r from-pink-500 to-pink-800 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Product Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {product &&
              product.map((p) => (
                <tr
                  key={p._id}
                  className="bg-gray-800   border-b dark:border-gray-100 hover:bg-blue-100 dark:hover:bg-gray-800 transition-all text-white"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                  >
                    {p.product_name}
                  </th>
                  <td className="px-6 py-4">Rs. {p.product_price}</td>
                  <td className="px-6 py-4">{p.countInStock}</td>
                  <td className="px-6 py-4">{p.product_description}</td>
                  <td className="px-6 py-4">
                    <img
                      src={`http://localhost:8181/${p.product_image}`}
                      alt={p.product_name}
                      className="w-24 h-24 object-cover rounded-lg shadow-md"
                    />
                  </td>
                  <td className="px-6 py-4">{p?.category?.category_name}</td>
                  <td className="px-6 py-4 flex space-x-4">
                    <Link
                      to={`/admin/updateproduct/${p._id}`}
                      className="text-blue-600 text-2xl hover:text-blue-800 transition"
                    >
                      <FaPenSquare />
                    </Link>
                    <Link
                      to="#"
                      onClick={() => deleteProduct(p._id)}
                      className="text-red-600 text-2xl hover:text-red-800 transition"
                    >
                      <FaTrashAlt />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
