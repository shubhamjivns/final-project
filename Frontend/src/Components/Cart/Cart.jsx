import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "../Navbar";
import Footer from "../Footer";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items from backend
  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        credentials: "include",
      });
      const data = await res.json();
      setCart(data.items || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Add product to cart
  const addToCart = async (product) => {
    try {
      const res = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(product),
      });

      const data = await res.json();
      setCart(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  // Remove item
  const removeItem = async (productId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/cart/remove/${productId}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();
      setCart(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p className="text-center mt-10 text-lg">Loading cart...</p>;

  return (
    <>
    <Header />
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <Card key={item._id} className="mb-4">
            <CardContent className="flex gap-4 p-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
              <Button
                variant="destructive"
                onClick={() => removeItem(item._id)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
    <Footer/>
    </>
  );
}
