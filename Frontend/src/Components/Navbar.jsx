import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Search from "./Search";
import logo from "../assets/logo.png";

// styled badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
  const confirmLogout = window.confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // redirect to Home
  }
};


  return (
    <header className="bg-white shadow-sm">
      {/* ---------- TOP STRIP ---------- */}
      <div className="py-2 border-t border-b border-gray-200 hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm font-medium">
            Get up to 50% off new season lights, limited time only
          </p>
          <ul className="flex gap-4">
            <li>
              <Link to="/help-center" className="text-sm hover:underline">
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="https://app.shiprocket.in/"
                className="text-sm hover:underline"
              >
                Order Tracking
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- MAIN HEADER ---------- */}
      <div className="py-3 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="w-1/3 md:w-1/4">
            <Link to="/">
              <img src={logo} className="w-[220px] h-[60px]" />
            </Link>
          </div>

          {/* Search Bar (hide on mobile) */}
          <div className="hidden md:block w-1/2">
            <Search />
          </div>

          {/* Icons */}
          <div className="w-1/3 md:w-1/4 flex justify-end gap-4 items-center">
            {/* mobile menu button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>

            {/* desktop icons */}
            <ul className="hidden md:flex items-center gap-3">
              {!isLoggedIn && (
                <li>
                  <Link to="/login" className="text-sm">
                    Login
                  </Link>{" "}
                  |{" "}
                  <Link to="/signup" className="text-sm">
                    Register
                  </Link>
                </li>
              )}

              {isLoggedIn && (
                <li>
                  <button onClick={handleLogout} className="text-sm">
                    Logout
                  </button>
                </li>
              )}

              <li>
                <Tooltip title="Compare">
                  <IconButton>
                    <StyledBadge badgeContent={1} color="secondary">
                      <IoMdGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Link to="/cart">
                  <Tooltip title="Cart">
                    <IconButton>
                      <StyledBadge badgeContent={1} color="secondary">
                        <MdOutlineShoppingCart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </Link>
              </li>

              <li>
                <Tooltip title="Wishlist">
                  <IconButton>
                    <StyledBadge badgeContent={1} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- NAVIGATION MENU ---------- */}
      <div className="py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center gap-10">
          {/* categories dropdown */}
          <div className="w-[25%]">
            <Button className="!text-black flex items-center gap-2 w-full">
              <RiMenu2Fill className="text-xl" />
              Shop By Categories
              <FaAngleDown />
            </Button>
          </div>

          {/* nav links */}
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/category">Categories</Link>
            </li>
            <li>
              <Link to="/brand">Brands</Link>
            </li>
            <li>
              <Link to="/offer">Offer</Link>
            </li>
            <li>
              <Link to="/smart">IOT & Smart</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>

          <div className="w-[20%] text-sm font-medium flex items-center gap-2">
            <GoRocket className="text-lg" /> Free National Delivery
          </div>
        </div>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-xl p-5">
          {/* Search in mobile */}
          <div className="mb-4">
            <Search />
          </div>

          <ul className="flex flex-col gap-4 text-[15px] font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/category">Categories</Link></li>
            <li><Link to="/brand">Brands</Link></li>
            <li><Link to="/offer">Offer</Link></li>
            <li><Link to="/smart">IOT & Smart</Link></li>
            <li><Link to="/about">About Us</Link></li>

            {!isLoggedIn && <li><Link to="/login">Login / Register</Link></li>}
            {isLoggedIn && <li><button onClick={handleLogout}>Logout</button></li>}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
