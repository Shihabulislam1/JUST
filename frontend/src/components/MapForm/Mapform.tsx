"use client";
import React from "react";
import { Button } from "../ui/button";
import PlacesSearchOrigin from "./PlaceSearchOrigin";
import PlacesSearchDestination from "./PlaceSearchDestination";
import { useUserAddress } from "@/contexts/user.context";

const Mapform = () => {
  const {
    duration,
    distance,
    directionsResponse,
    setDirectionsResponse,
    setDestination,
    setDuration,
    setDistance,
    originRef,
    destiantionRef,
  } = useUserAddress();

  async function calculateRoute(e: any) {
    e.preventDefault();
    // eslint-disable-next-line
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    // eslint-disable-next-line
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    console.log(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute(e: any) {
    e.preventDefault();
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <div className="bg-bgdark h-[calc(100vh-130px)]  ">
      <form className="flex flex-col h-full justify-center  gap-4 items-center ">
        <PlacesSearchOrigin />
        <PlacesSearchDestination />
        {distance !== "" && duration !== "" && (
          <div className="flex flex-col gap-3 bg-cream-300 text-blue-950 p-2 rounded">
            <p className="bg-cream-400 rounded py-2 text-center font-semibold">
              Distance: <span className="font-bold">{distance}</span>
            </p>
            <p className="bg-cream-400 rounded py-2 text-center font-semibold">
              Estimated Duration: <span className="font-bold">{duration}</span>
            </p>
          </div>
        )}
        <div className="text-bgdark flex gap-2 font-bold">
          <Button className="bg-cream-400 rounded-xl hover:border hover:border-cream-400 hover:text-cream-400" onClick={calculateRoute}>
            Calculate Route
          </Button>
          <Button className="bg-cream-400 rounded-xl " onClick={clearRoute}>
            Clear Route
          </Button>
        </div>
        <Button className="bg-cream-900 rounded-xl text-cream-400 ">
          Next Step
        </Button>
      </form>
    </div>
  );
};

export default Mapform;
