import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../components/userComponents/Cards";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/productlist`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-100        relative bg-gradient-to-r from-pink-500 to-red-900  shadow-lg flex items-center justify-between  text-black">
        <div className="mx-auto max-w-full px-10">
          <h2 className="text-2xl font-semibold text-center text-white mb-8">
            Featured Products
          </h2>
          <div className="flex items-end justify-center ">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4">
              {product.map((p, i) => (
                <Cards data={p} key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
