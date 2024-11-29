import React from "react";

const HomeHeroSection = () => {
  return (
    <div
      className=" h-[400px] lg:h-[550px] object-fill bg-cover bg-center flex flex-col items-center justify-center text-white py-20 px-10"
      style={{
        backgroundImage: "url('/src/assets/home-assets/Home_Hero_Section.png')",
      }}
    >
      <h1 className="text-5xl font-bold mb-4 bg-black/5">
        Discover Your Perfect Stay
      </h1>
      <p className="text-xl mb-8 text-center bg-black/10">
        Find the best hotels at unbeatable prices. Enjoy luxury,
        <br />
        comfort, and convenience tailored just for you.
      </p>
      <button
        type="button"
        className="text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Booking Now
      </button>
    </div>
  );
};

export default HomeHeroSection;
