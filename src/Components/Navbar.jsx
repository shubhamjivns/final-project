import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Search from './Search';
import logo from '../assets/logo.png';
import Navigation from "./Navigation";






const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));



const Header = () => {
    return (
        <header className="bg-white">
            <div className="top-strip py-2 border-t border-b border-gray-200">
                <div className="container mx-auto flex items-center justify-between">
                    <p className="text-sm font-medium">
                        Get up to 50% off new season lights, limited time only
                    </p>
                    <ul className="flex gap-3">
                        <li>
                            <Link to="/help-center" className="text-sm font-medium hover:underline">
                                Help Center
                            </Link>
                        </li>
                        <li>
                            <Link to="/order-tracking" className="text-sm font-medium hover:underline">
                                Order Tracking
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="header py-1 border-b border-gray-200">
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <Link to={'/'}><img src={logo} /></Link>
                    </div>

                    <div className="col1 w-[45%]"><Search /></div>

                    <div className="col1 w-[30%] flex items-center pl-7">
                        <ul className="flex items-center justify-end gap-3 w-full">
                            <li className="list-none">
                                <Link to="/login" className="link transition text-[15px] font-[500]">Login</Link> | <Link to="/Register" className="link transition text-[15px] font-[500]">Register</Link>
                            </li>

                            <li>
                                <Tooltip title="Compare">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={1} color="secondary">
                                            <IoMdGitCompare />

                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>

                            <li>
                                <Tooltip title="Cart">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={1} color="secondary">
                                            <MdOutlineShoppingCart />

                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>

                            <li>
                                <Tooltip title="Wishlist">
                                    <IconButton aria-label="cart">
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

            <Navigation />

        </header >
    );
};

export default Header;
