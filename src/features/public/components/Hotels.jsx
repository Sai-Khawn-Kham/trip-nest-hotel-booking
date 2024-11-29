import React from "react";
import Container from "../../../components/Container";
import useHotelStore from "../../../stores/useHotelStore";
import HotelCart from "./HotelCart";

const Hotels = () => {
  const { hotels } = useHotelStore();
  return (
    <div className="mt-5">
      <Container>
        <div className="max-w-7xl mx-auto py-8 ">
          <h2 className="text-4xl font-normal mb-6">Hotels in all Cities</h2>
          <div className="space-y-6">
            {hotels.map((hotel) => (
              <HotelCart key={hotel.name} {...hotel} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hotels;
