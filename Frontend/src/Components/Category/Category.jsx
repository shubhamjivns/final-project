import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import Footer from "../Footer";
import Header from "../Navbar";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [brandList, setBrandList] = useState([]);

  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedDiscount, setSelectedDiscount] = useState("all");
  const [sortType, setSortType] = useState("none");

  // Fetch products from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
        setBrandList([...new Set(res.data.map(p => p.brand))]);
      })
      .catch((err) => console.log(err));
  }, []);

  // Apply all filters together
  useEffect(() => {
    let temp = [...products];

    // Price filter
    if (selectedPrice !== "all") {
      const [min, max] = selectedPrice.split("-").map(Number);
      temp = temp.filter(p => p.price >= min && p.price <= max);
    }

    // Brand filter
    if (selectedBrand !== "all") {
      temp = temp.filter(p => p.brand === selectedBrand);
    }

    // Discount filter
    if (selectedDiscount !== "all") {
      const dis = Number(selectedDiscount);
      temp = temp.filter(p => p.discount >= dis);
    }

    // Sorting
    if (sortType === "low-high") temp.sort((a, b) => a.price - b.price);
    if (sortType === "high-low") temp.sort((a, b) => b.price - a.price);

    setFiltered(temp);
  }, [selectedPrice, selectedBrand, selectedDiscount, sortType, products]);

  // Add to Cart
  const addToCart = async (product) => {
    try {
      await axios.post("http://localhost:5000/api/cart/add", {
        productId: product._id,
        quantity: 1,
      });
      alert("Product added to cart!");
    } catch (error) {
      console.log(error);
    }
  };

  // Add to Wishlist
  const addToWishlist = async (product) => {
    try {
      await axios.post("http://localhost:5000/api/wishlist/add", {
        productId: product._id,
      });
      alert("Added to Wishlist!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <><Header/>
    <div className="category-container">

      {/* Sidebar Filters */}
      <aside className="sidebar">
        <h2>Filters</h2>

        {/* Price Filter */}
        <div className="filter-section">
          <h3>Price</h3>
          {[
            ["all", "All"],
            ["0-500", "₹0 - ₹500"],
            ["500-1000", "₹500 - ₹1000"],
            ["1000-2000", "₹1000 - ₹2000"],
            ["2000-5000", "₹2000 - ₹5000"],
          ].map(([value, label]) => (
            <label key={value}>
              <input
                type="radio"
                name="price"
                value={value}
                checked={selectedPrice === value}
                onChange={() => setSelectedPrice(value)}
              />
              {label}
            </label>
          ))}
        </div>

        {/* Brand Filter */}
        <div className="filter-section">
          <h3>Brand</h3>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="all">All Brands</option>
            {brandList.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Discount Filter */}
        <div className="filter-section">
          <h3>Discount</h3>
          <select
            value={selectedDiscount}
            onChange={(e) => setSelectedDiscount(e.target.value)}
          >
            <option value="all">All</option>
            <option value="10">10% or more</option>
            <option value="20">20% or more</option>
            <option value="30">30% or more</option>
            <option value="40">40% or more</option>
          </select>
        </div>

        {/* Sorting */}
        <div className="filter-section">
          <h3>Sort By</h3>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="none">Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </aside>

      {/* Products List */}
      <main className="products">
        <h2>Products</h2>

        <div className="product-grid">
          {filtered.map((p) => (
            <div className="product-card" key={p._id}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p className="brand">{p.brand}</p>
              <p className="price">₹{p.price}</p>
              <p className="discount">{p.discount}% OFF</p>

              <div className="actions">
                <button onClick={() => addToCart(p)}>Add to Cart</button>
                <button className="wishlist-btn" onClick={() => addToWishlist(p)}>
                  ❤️ Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Category;
