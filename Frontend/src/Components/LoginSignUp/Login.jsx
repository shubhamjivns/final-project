import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login() {
const navigate = useNavigate();


const [form, setForm] = useState({ email: "", password: "" });
const [message, setMessage] = useState("");
const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
e.preventDefault();
try {
const res = await axios.post("http://localhost:5000/api/auth/login", form);
localStorage.setItem("token", res.data.token);
navigate("/dashboard");
} catch (err) {
setMessage(err.response.data.message);
}
};


return (
<div className="flex justify-center items-center h-screen bg-gray-100">
<form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 w-96">
<h2 className="text-2xl font-bold text-center mb-6">Login</h2>


<input
type="email"
name="email"
placeholder="Email"
className="w-full border p-2 rounded mb-3"
onChange={handleChange}
/>


<input
type="password"
name="password"
placeholder="Password"
className="w-full border p-2 rounded mb-4"
onChange={handleChange}
/>


<button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
Login
</button>


<p className="text-center text-sm text-red-500 mt-2">{message}</p>
</form>
</div>
);
}