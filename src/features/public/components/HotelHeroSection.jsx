import React from "react";

const HotelHeroSection = () => {
  return (
    <div
      className=" h-[400px] lg:h-[550px] object-fill bg-cover bg-center flex flex-col items-center justify-center text-white py-20 "
      style={{
        backgroundImage:
          "url('/src/assets/hotel-assets/Hotels_Hero_Section.png')",
      }}
    >
      <div>
        <h1 className="text-5xl font-bold mb-6">
          Hotels & places to stay in Myanmar
        </h1>
        <p className="text-xl mb-8 text-center bg-black/10">
          Find the best hotels at unbeatable prices. Enjoy luxury,
          <br />
          comfort, and convenience tailored just for you.
        </p>
      </div>
    </div>
  );
};

export default HotelHeroSection;
