import React, { useRef } from "react";
import { HiSearch } from "react-icons/hi";
import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";
import Container from "../../../components/Container";

const PublicHeader = () => {
   const searchRef = useRef(null);
   const handleSearchInput = () => {};
   return (
      <header className="sticky top-0">
         <nav className="bg-blue-800 px-4 lg:px-16 py-3">
            <Container>
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
               <Link to={"/"} className="flex items-center gap-2">
                  <div className="flex items-center">
                     <img
                        src="/src/assets/fav.icon"
                        className="mr-1 h-12"
                        alt="Logo"
                     />
                  </div>
                  <div className="relative">
                     <div className="absolute inset-y-0 start-0 flex justify-center items-center ps-3.5 pointer-events-none">
                        <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                     </div>
                     <input
                        type="text"
                        className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-stone-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full ps-10 p-2.5 dark:placeholder-gray-400"
                        placeholder="Search hotels"
                        onChange={handleSearchInput}
                        ref={searchRef}
                     />
                  </div>
               </Link>
               <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-white">
                     <li>
                        <NavLink
                           to="/"
                           className={({ isActive }) =>
                              isActive ? "underline" : ""
                           }
                        >
                           Home
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="city/hotels"
                           className={({ isActive }) =>
                              isActive ? "underline" : ""
                           }
                        >
                           Hotels
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="about-us"
                           className={({ isActive }) =>
                              isActive ? "underline" : ""
                           }
                        >
                           About Us
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="contact-us"
                           className={({ isActive }) =>
                              isActive ? "underline" : ""
                           }
                        >
                           Contact Us
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="login"
                           className={({ isActive }) =>
                              isActive ? "underline" : ""
                           }
                        >
                           Sign In
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </div>
            </Container>
         </nav>
      </header>
   );
};

export default PublicHeader;
