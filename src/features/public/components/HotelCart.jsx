import React from "react";
import Rating from "../../../components/Rating";
import { HiChevronRight } from "react-icons/hi2";

const HotelCart = ({
  name,
  location,
  description,
  rating,
  reviews,
  images,
}) => {
  return (
    <div className="  border border-[#7f9dca] p-6 rounded-md">
      <div className="grid grid-cols-4 gap-2 items-center bg-[#fbf7f7] rounded-md">
        <div className=" col-span-1 shadow-md rounded-tl-md">
          <img className="mb-1 rounded-t-md" src={images[0]} alt="" />
          <div className="grid grid-cols-3 gap-1">
            <div className=" col-span-1 rounded-bl-md">
              <img src={images[1]} alt="" className="rounded-bl-md" />
            </div>
            <div className=" col-span-1">
              <img src={images[2]} alt="" />
            </div>
            <div className=" col-span-1">
              <img src={images[3]} alt="" className=" rounded-br-md" />
            </div>
          </div>
        </div>
        <div className=" col-span-3  flex flex-col py-5 px-3 gap-3">
          <div>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-gray-600 mb-2 flex items-center gap-2">
              <img src="/src/assets/map-pin.png" alt="" />
              <span className="text-base font-normal">{location}</span>
            </p>
          </div>
          <p className=" text-base font-normal  text-gray-700 mb-4">
            {description}
          </p>
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Rating rate={rating} />
              <div>
                <p className="text-gray-600 text-base">{reviews} Reviews</p>
              </div>
            </div>
            <button
              type="button"
              className="text-white text-sm font-medium bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg  px-12 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center gap-2 "
            >
              <span>Check Availability</span> <HiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCart;
