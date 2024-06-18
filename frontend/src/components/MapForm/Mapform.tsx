"use client";
import React from "react";
import { Button } from "../ui/button";
import PlacesSearchOrigin from "./PlaceSearchOrigin";
import PlacesSearchDestination from "./PlaceSearchDestination";

const Mapform = () => {
  return (
    <div className="bg-bgdark h-[calc(100vh-130px)]  ">
      <form className="flex flex-col h-full justify-center  gap-4 items-center ">
        <PlacesSearchOrigin/>
        <PlacesSearchDestination/>
        <Button className="bg-cream-900 rounded-xl text-cream-400">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Mapform;
