import React from "react";
import PopularHotelsCardRating from "./PopularHotelCardRating";

const PopularHotelsCard = ({
  hotel: { id, title, image, rate, location, category, price },
}) => {
  return (
    <div className="group col-span-1 border rounded-md border-blue-200 hover:shadow-[0_0_10px_rgba(0,0,0,0.4)] overflow-hidden duration-500 ease-in-out">
      <div className=" w-full h-64 overflow-hidden">
        <img
          src={image}
          alt=""
          className=" object-cover w-full h-full  duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-1 p-4">
        <h1 className="text-[24px] text-nowrap font-bold text-blue-800">
          {title}
        </h1>
        <div className="flex gap-3">
          <PopularHotelsCardRating rate={rate} />
        </div>
        <div className="flex gap-2">
          <img src="../../../../src/assets/map-pin.svg" alt="" />
          <p className="text-[12px] text-nowrap text-[#557CB8] font-sans">
            {location}
          </p>
        </div>
        <div className="text-[14px] text-[#557CB8] flex items-end justify-between">
          <p>4.8K Reviews</p>
          <p>
            Per Night{" "}
            <span className="font-bold text-[20px] text-blue-800">
              ${price.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularHotelsCard;
