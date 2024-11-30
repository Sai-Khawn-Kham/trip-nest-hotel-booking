import React from "react";

const HeroSection = ({ imgUrl, heroHeading, subHeading, text, buttons }) => {
  return (
    <div
      className=" h-[400px] lg:h-[550px] object-fill bg-cover bg-center flex flex-col items-center justify-center text-white py-20 px-10"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <h1 className="text-5xl font-bold mb-5 bg-black/5">{heroHeading}</h1>
      <p className=" flex flex-col text-xl mb-8 text-center bg-black/10">
        <span>{subHeading}</span>

        <span>{text}</span>
      </p>

      {buttons &&
        buttons.map((button, index) => (
          <button
            key={index}
            type="button"
            className="text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {button.textName}
          </button>
        ))}
    </div>
  );
};

export default HeroSection;
