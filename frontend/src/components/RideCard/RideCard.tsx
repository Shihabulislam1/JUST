import React from "react";
import Text from "../Text/Text";

const RideCard = ({
  location = "Talaimari",
  destination = "Bazar",
  fare = "100",
  date = "2021-09-01",
}: {
  location: string;
  destination: string;
  fare: string;
  date: string;
}) => {
  return (
    <div className="bg-cream-100 px-16 py-24 flex flex-col rounded-xl gap-16">
      <div className="grid grid-cols-2 gap-x-32 gap-y-16">
        <Text text="Location" value={location} />
        <Text text="Destination" value={destination} />
        <Text text="Fare" value={fare} />
        <Text text="Date" value={date} />
      </div>
      <div className="flex justify-center items-center gap-12">
        <button className="button">Accept</button>
        <button className="bg-red-800 text-cream-100 button">Cancel</button>
      </div>
    </div>
  );
};

export default RideCard;
