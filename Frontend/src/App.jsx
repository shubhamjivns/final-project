import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelpCenter from "./Components/Helpcenter/Helpcenter";
import Home from './Components/Home';
import ProductSection from "./Components/Product/ProductSection";
import CartPage from "./Components/Cart/Cart";
import Login from "./Components/LoginSignUp/Login";
import Signup from "./Components/LoginSignUp/Signup";
import CategoryPage from "./Components/Category/Category";
import AddProduct from "./Components/Admin/AddProduct";



function App() {
  return (
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/help-center" element={<HelpCenter />} />
    <Route path="/products" element={<ProductSection />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/SignUp" element={<Signup />} />
    <Route path="/category" element={<CategoryPage />} />
    <Route path="/admin/add-product" element={<AddProduct />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;