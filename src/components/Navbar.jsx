import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
{
  /* <FaAngleDown /> */
}
const Navbar = () => {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/product");
  const [toggle, settoggle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(null);
  const menuItems = [
    {
      icon: "",
      title: "Attendify",
      path: "product/Attendify",
    },
    {
      icon: "",
      title: "OmniRoad 2.0",
      path: "product/OmniRoad",
    },
    {
      icon: "",
      title: "CrowIQ",
      path: "product/CrowdIQ",
    },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsHovered(false); // Close the menu
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="relative">
      <nav
        className={`w-full justify-between items-center flex p-8 ${
          isProductPage ? "bg-[#121212]" : "bg-[#031223]"
        }`}
      >
        <div className="logo">
          <img
            src="https://landing.ai/wp-content/uploads/2024/06/DarkLogo.svg"
            alt=""
          />
        </div>
        <div className="hidden lg:flex lg:text-lg gap-x-8 xl:text-xl font-semibold text-white">
          <div className="flex justify-center items-center">
            <Link
              to="/"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition duration-300"
              activeClassName="text-blue-400"
            >
              Home
            </Link>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={menuRef}
          >
            <div className="flex items-center gap-1">
              <div className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition duration-300">
                Products
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-300 transition-transform duration-300 ${
                  isHovered ? "rotate-180" : ""
                }`}
              />
            </div>

            {isHovered && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-gray-800 rounded-md shadow-lg z-50">
                <div className="py-2">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200"
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center items-center">
            <Link
              to="/industry"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition duration-300"
              activeClassName="text-blue-400"
            >
              Industries
            </Link>
          </div>
          <div className="flex justify-center items-center"></div>
        </div>

        <div className="hidden lg:block text-white  font-bold">
          <button className="bg-blue-600 rounded-l-full rounded-r-full px-6 py-2 lg:text-sm xl:text-base ">
            <Link
              to="/build-your-vision"
              className="px-4 py-2 text-gray-300 rounded transition duration-300"
              activeClassName="text-blue-400"
            >
              Let’s Build Your Vision
            </Link>
          </button>
        </div>

        {/* //hamburger menu */}

        <div onClick={() => settoggle(!toggle)} className="block lg:hidden ">
          <img
            src="https://landing.ai/wp-content/uploads/2023/03/menu-hamburger-mobile-tablet.svg"
            alt=""
          />
        </div>

        {/* sidebar */}
        <div
          className={`block  lg:hidden  w-full p-6 transition-all   bg-[#062446] text-white absolute top-0 z-30  ${
            toggle
              ? " right-0 duration-500 opacity-100  ease-in"
              : " right-[-100%] opacity-50  duration-300 ease-in-out"
          }   `}
        >
          <div className="w-full flex justify-between">
            <div className="logo ">
              <img
                src="https://landing.ai/wp-content/uploads/2024/06/DarkLogo.svg"
                alt=""
              />
            </div>
            <RxCross2 onClick={() => settoggle(!toggle)} size={30} />
          </div>

          <div className="flex justify-end gap-x-4 py-12">
            <div className=" text-white  font-bold">
              <button className=" bg-transparent border-[1px] borrder-white rounded-l-full rounded-r-full px-2 py-1 lg:text-sm xl:text-base ">
                Contact Us
              </button>
            </div>
            <div className=" text-white  font-bold">
              <button className="bg-blue-600 rounded-l-full rounded-r-full px-2 py-1 lg:text-sm xl:text-base ">
                Get a Demo
              </button>
            </div>
          </div>
          <hr className="border-[1px] borde-white w-full" />

          <div className="text-[#44A0FF]">
            {/* Product */}
            <div>
              <div className="py-5 -ml-2 font-bold">
                <h1>Product</h1>
              </div>
              <div className="px-2 gap-y-8 mt-2 font-semibold text-[16px] leading-tight  flex flex-col">
                <div className="flex ">
                  <img
                    className="mr-2 w-5"
                    src="https://landing.ai/wp-content/uploads/2023/12/Validation.svg"
                    alt=""
                  />
                  <Link to="/product" activeClassName="text-blue-400">
                    Our Products
                  </Link>
                </div>
              </div>
            </div>
            {/* Industires */}
            <div>
              <div className="py-5 -ml-2 font-bold">
                <h1>Industries</h1>
              </div>
              <div className="px-2 gap-y-8 mt-2 font-semibold text-[16px] leading-tight  flex flex-col">
                <div className="flex ">
                  <img
                    className="mr-2 w-5"
                    src="https://landing.ai/wp-content/uploads/2023/12/Validation.svg"
                    alt=""
                  />
                  <Link to="/industry">Industries</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
