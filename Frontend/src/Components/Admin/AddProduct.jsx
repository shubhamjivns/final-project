import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    oldPrice: "",
    discount: "",
    description: "",
    images: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { 
      ...product, 
      images: product.images.split(",") 
    };

    try {
      await axios.post("http://localhost:5000/api/products", payload);
      alert("Product Added Successfully!");
    } catch (error) {
      alert("Failed to add product!");
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto", padding: "20px" }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(product).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key}
            value={product[key]}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        ))}
        <button style={{ width: "100%", padding: "10px" }}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
