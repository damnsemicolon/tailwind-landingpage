import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        // Navbar for screen larger or above
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#e7e7e7]">
            <h1 className="w-full text-3xl font-bold text-[#008adf]"><a href="logo">Tailwind.</a></h1>
            <ul className="hidden md:flex">
                <li className="p-4"><a href="home">Home</a></li>
                <li className="p-4"><a href="company">Company</a></li>
                <li className="p-4"><a href="resoures">Resources</a></li>
                <li className="p-4"><a href="about">About</a></li>
                <li className="p-4"><a href="contact">Contact</a></li>
            </ul>

            {/* Navbar for medium screen or smaller */}
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            {/* Burger Menu */}
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000700] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#008adf] m-4">
                    Tailwind.
                </h1>
                <ul className=" uppercase p-4">
                    <li className="p-4 border-b border-gray-700">Home</li>
                    <li className="p-4 border-b border-gray-700">Company</li>
                    <li className="p-4 border-b border-gray-700">Resources</li>
                    <li className="p-4 border-b border-gray-700">About</li>
                    <li className="p-4">Contact Us</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
