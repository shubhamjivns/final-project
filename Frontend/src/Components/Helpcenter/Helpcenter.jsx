import React from "react";
import Header from "../Navbar";
import Footer from "../Footer";

export default function HelpCenter() {
  return (
    <>
    <Header />
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
        <p className="text-gray-600 text-lg mb-10">
          Welcome to the Vivensaa Help Center. Find answers to common issues
          or contact our support team.
        </p>

        {/* Help Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Orders & Tracking */}
          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Orders & Tracking</h2>
            <ul className="text-gray-700 space-y-2">
              <li>How to place an order?</li>
              <li>How to check order status?</li>
              <li>I didn’t receive my order</li>
              <li>Order shows delivered but not received</li>
            </ul>
          </div>

          {/* Shipping & Delivery */}
          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Shipping & Delivery</h2>
            <ul className="text-gray-700 space-y-2">
              <li>Delivery time by location</li>
              <li>Delivery charges</li>
              <li>Damaged or wrong product</li>
              <li>Change address after placing order</li>
            </ul>
          </div>

          {/* Returns & Refunds */}
          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Returns & Refunds</h2>
            <ul className="text-gray-700 space-y-2">
              <li>How to request a return</li>
              <li>Return eligibility</li>
              <li>Refund processing time</li>
              <li>Refund not received</li>
            </ul>
          </div>

          {/* Payments */}
          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Payments</h2>
            <ul className="text-gray-700 space-y-2">
              <li>Available payment methods</li>
              <li>Payment failed but money deducted</li>
              <li>Cash on Delivery availability</li>
              <li>Applying coupon codes</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 shadow rounded-2xl mb-12">
          <h2 className="text-2xl font-semibold mb-4">Need More Help? Contact Us</h2>
          <p className="text-gray-700 mb-3">Email: Vivensaalucknow@gmail.com</p>
          <p className="text-gray-700 mb-3">Phone: +91-7388616665</p>
          <p className="text-gray-700">Working Hours: 10:00 AM – 7:00 PM (Mon–Sat)</p>
        </div>

        {/* FAQ */}
        <div className="bg-white p-8 shadow rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">How long does delivery take?</h3>
              <p className="text-gray-700">Delivery usually takes 3–7 working days.</p>
            </div>
            <div>
              <h3 className="font-semibold">When will I get my refund?</h3>
              <p className="text-gray-700">Refunds take 3–5 business days after inspection.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can I cancel an order?</h3>
              <p className="text-gray-700">Yes, before the product is shipped.</p>
            </div>
            <div>
              <h3 className="font-semibold">What if I receive a defective product?</h3>
              <p className="text-gray-700">You can request a free replacement within 7 days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}