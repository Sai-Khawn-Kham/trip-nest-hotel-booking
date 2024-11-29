import React from "react";
import PopularHotelsCard from "./PopularHotelsCard";
import HomePageCustomerReviews from "./HomePageCustomerReviews.jsx";
import SubscribeSection from "./SubscribeSection";

const HomePagePopularHotelsSection = () => {
  const popularHotels = [
    {
      id: 1,
      title: "Wyndham Grand Hotel",
      image: "../../../../src/assets/WyndhamGrandHotel.png",
      rate: 5,
      location: "Hotel in Kantawgyi Lake Area, Yangon, Myanmar",
      category: "Yangon",
      price: 70.0,
    },
    {
      id: 2,
      title: "Chatrium Hotel Royal Lake",
      image: "../../../../src/assets/ChatriumHotelRoyalLake.png",
      rate: 5,
      location: "Tamwe, Yangon, Myanmar",
      category: "Yangon",
      price: 70.0,
    },
    {
      id: 3,
      title: "Novotel Hotel",
      image: "../../../../src/assets/NovotelHotel.png",
      rate: 5,
      location: "Kamayut Township, Yangon, Myanmar",
      category: "Yangon",
      price: 70.0,
    },
  ];

  return (
    <div>
      <h1 className="text-[40px] font-heading font-medium mb-5">
        Popular Hotels In Myanmar
      </h1>
      <div className=" grid grid-cols-3 gap-5 mb-28">
        {popularHotels.map((hotel) => (
          <PopularHotelsCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <HomePageCustomerReviews />
      <SubscribeSection />
    </div>
  );
};

export default HomePagePopularHotelsSection;
