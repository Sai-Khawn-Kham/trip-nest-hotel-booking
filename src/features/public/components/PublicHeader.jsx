import React, { useRef } from "react";
import { HiSearch } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import Container from "../../../components/Container";

const PublicHeader = () => {
   const searchRef = useRef(null);
   const handleSearchInput = () => {};
   return (
      <header className="sticky top-0 z-50">
         <nav className="bg-blue-800 px-4 lg:px-16 py-3">
            <Container>
               <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Link to={"/"} className="flex items-center gap-2">
                     <div className="flex items-center">
                        <img
                           src="/src/assets/fav.icon"
                           className="mr-1 size-16"
                           alt="Logo"
                        />
                     </div>
                     <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex justify-center items-center ps-3.5 pointer-events-none">
                           <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                        </div>
                        <input
                           type="text"
                           className="bg-gray-5 text-stone-900 rounded-lg block w-full h-8 ps-10"
                           placeholder="Search hotels"
                           onChange={handleSearchInput}
                           ref={searchRef}
                        />
                     </div>
                  </Link>
                  <div className="flex justify-between items-center w-auto">
                     <ul className="flex flex-row font-medium space-x-8 mt-0 text-white text-xl">
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
