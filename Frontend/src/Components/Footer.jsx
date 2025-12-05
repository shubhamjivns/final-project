import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-4">
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Vivensaa</h4>
                    <p>Lighting up homes and businesses with innovation and style.</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
                    <ul>
                        <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
                        <li><Link to="/products" className="hover:text-indigo-400">Products</Link></li>
                        <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
                        <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Customer Care</h4>
                    <ul>
                        <li>Help Center</li>
                        <li>Track Order</li>
                        <li>Returns</li>
                        <li>Warranty</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
                    <p>Email: support@vivensaa.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Address: Varanasi, India</p>
                </div>
            </div>
            <div className="text-center text-sm text-gray-500 mt-10">
                © 2025 Vivensaa Lights. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
