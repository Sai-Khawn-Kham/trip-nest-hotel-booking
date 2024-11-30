import React from "react";
import Container from "../../../components/Container";
import useHotelStore from "../../../stores/useHotelStore";
import HotelCart from "./HotelCart";
import useCityCategoryStore from "../../../stores/useCityCategoryStore";

const Hotels = () => {
  const { hotels } = useHotelStore();
  const { cityCategory } = useCityCategoryStore();

  const currentCity = cityCategory.find((city) => city.isActive === true);
  console.log(currentCity);

  return (
    <div className="mt-5">
      <Container>
        <div className="max-w-7xl mx-auto py-8 ">
          <h2 className="text-4xl font-normal mb-6">Hotels in all Cities</h2>
          <div className="space-y-6">
            {hotels
              .filter(
                (hotel) =>
                  hotel.location === currentCity.name ||
                  currentCity.name === "All Cities"
              )
              .map((hotel) => (
                <HotelCart key={hotel.name} {...hotel} />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hotels;
