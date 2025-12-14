// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart, FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch product from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/products/${id}`
        );
        const data = await res.json();

        // ✅ Normalize images
        const imagesArray =
          data.images?.length > 0
            ? data.images
            : data.image
            ? [data.image]
            : [];

        setProduct({ ...data, images: imagesArray });
        setMainImage(imagesArray[0]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="container mx-auto p-5 mt-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT — IMAGES */}
        <div>
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/600x400?text=No+Image";
            }}
          />

          <div className="flex gap-4 mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover border rounded-lg cursor-pointer ${
                  mainImage === img
                    ? "border-black"
                    : "border-gray-300"
                }`}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/150?text=No+Image";
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — DETAILS */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500 mt-1">Brand: {product.brand || "Vivensaa"}</p>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-500">
              {Array(4)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
              <FaStar className="text-gray-300" />
            </div>
            <span className="text-sm text-gray-500">4.1 (240 reviews)</span>
          </div>

          {/* PRICE */}
          <div className="mt-4">
            <div className="text-3xl font-bold text-green-600">
              ₹{product.price}
            </div>
            {product.mrp && (
              <div className="flex gap-3 items-center text-gray-500 text-sm">
                <p>
                  M.R.P:{" "}
                  <span className="line-through">₹{product.mrp}</span>
                </p>
                {product.discount && (
                  <p className="text-green-600 font-semibold">
                    {product.discount}% Off
                  </p>
                )}
              </div>
            )}
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-3 hover:bg-orange-600">
              <MdOutlineShoppingCart className="text-2xl" />
              Add to Cart
            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700">
              Buy Now
            </button>

            <button className="border px-3 py-2 rounded-lg hover:bg-gray-100">
              <FaRegHeart className="text-xl" />
            </button>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">
              Product Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* SPECIFICATIONS */}
          {product.specs && (
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-3">
                Specifications
              </h2>

              <table className="w-full border text-left">
                <tbody>
                  {Object.entries(product.specs).map(
                    ([key, value]) => (
                      <tr key={key} className="border">
                        <td className="p-3 font-medium bg-gray-100 w-[40%]">
                          {key}
                        </td>
                        <td className="p-3">{value}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
import React, { useEffect, useState } from "react";