import React from 'react'
import Button from '@mui/material/Button'
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";



function Navigation() {
    return (
        <div className='py-2'>
            <div className='container flex items-center justify-end gap-20'>
                <div className="col_1 w-[25%]">
                    <Button className='!text-black gap-2 w-full'><RiMenu2Fill className='text-[18px] ml-auto font-bold' />Shop By Categories<FaAngleDown className='text-[14px] ml-auto font-bold' />
                    </Button>
                </div>

                <div className="col_2 w-[55%]">
                    <ul className='flex items-center gap-5'>
                        <li className='list-none'>
                            <button className='link transition text-[14px] font-[500]'>Home</button>
                        </li>
                        <li className='list-none'>
                            <button className='link transition text-[14px] font-[500]'>Products</button>
                        </li>
                        <li className='list-none'>
                            <button className='link transition text-[14px] font-[500]'>Categories</button>
                        </li>
                        <li className='list-none'>
                            <button className='link transition text-[14px] font-[500]'>Brands</button>
                        </li>
                        <li className='list-none'>
                            <button className='link transition text-[14px] font-[500]'>Offer</button>
                        </li>
                        <li className='list-none'>
                            <button className='link transition text-[14px] font-[500]'>Iot & Smart</button>
                        </li>
                        <li className='list-none'>
                            <button className='link transition text-[14px] font-[500]'>About Us</button>
                        </li>
                    </ul>
                </div>

                <div className="col_2 w-[20%]"><p className='text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0'><GoRocket className='text-[18px]' />
                    Free National Delivery</p></div>
            </div>
        </div>
    )
}

export default Navigation;