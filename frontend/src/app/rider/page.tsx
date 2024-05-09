import React from "react";
import RideCard from "../../components/RideCard/RideCard";

const Rider = () => {


  return (
    <div className="px-64 py-48 ">
      <RideCard
        location="Talaimari"
        destination="Bazar"
        fare="100"
        date="2021-09-01"
      />
    </div>
  );
};

export default Rider;
