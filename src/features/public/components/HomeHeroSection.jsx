import React from "react";
import HeroSection from "./HeroSection";

const HomeHeroSection = () => {
  return (
    <HeroSection
      imgUrl={"/src/assets/home-assets/Home_Hero_Section.png"}
      heroHeading={"Discover Your Perfect Stay"}
      subHeading={"Find the best hotels at unbeatable prices. Enjoy luxury,"}
      text={"comfort, and convenience tailored just for you."}
      buttons={[
        {
          textName: "Book Now",
        },
      ]}
    />
  );
};

export default HomeHeroSection;
