import React from "react";
import Header from "../Navbar";
import Footer from "../Footer";

const products = [
  {
    id: 1,
    name: "LED Flood Light (50W–300W)",
    image:
      "https://images.unsplash.com/photo-1584270354949-df6ef3ebd9c4?auto=format&fit=crop&w=600&q=80",
    description:
      "High-brightness industrial-grade LED flood lights for outdoor lighting.",
    price: "₹1,299 – ₹6,499",
  },
  {
    id: 2,
    name: "LED Street Light (20W–120W)",
    image:
      "https://images.unsplash.com/photo-1586201375774-3a13dbe6fdf8?auto=format&fit=crop&w=600&q=80",
    description:
      "Energy-efficient street lights designed for wide-area visibility.",
    price: "₹899 – ₹3,499",
  },
  {
    id: 3,
    name: "Indoor LED Panel Light",
    image:
      "https://images.unsplash.com/photo-1589578527966-0eeae16a9c17?auto=format&fit=crop&w=600&q=80",
    description:
      "Premium indoor lighting solutions for homes and commercial spaces.",
    price: "₹399 – ₹1,999",
  },
  {
    id: 4,
    name: "LED Bulb Range (0.5W–50W)",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
    description:
      "All types of LED bulbs perfect for home, shops, offices, and factories.",
    price: "₹49 – ₹399",
  },
];
const ProductSection = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>

                <p className="font-semibold text-black mb-4">
                  {product.price}
                </p>

                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
    
  );
};

export default ProductSection;
