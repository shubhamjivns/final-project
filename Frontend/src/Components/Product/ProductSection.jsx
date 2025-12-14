import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Navbar";
import Footer from "../Footer";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
      <Header />

      <div className="px-6 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Lighting Products
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our commercial-grade LED lighting products designed for
          industrial, residential, and outdoor applications.
        </p>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">
            No products available
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-lg h-80 object-contain rounded-xl shadow"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/600x400?text=No+Image";
                  }}
                />


                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>

                  <p className="font-semibold text-black mb-4">
                    ₹ {product.price}
                  </p>

                  <button
                    onClick={() => navigate(`/product/${product._id}`)}
                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ProductSection;
