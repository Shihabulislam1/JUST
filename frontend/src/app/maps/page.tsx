"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { constants } from "@/constants/constants";
import React from "react";

const Page = () => {
  const position = { lat: 37.7749, lng: -122.4194 };
  const [open,setOpen]=useState(false)

  return (
    <APIProvider apiKey={constants.GoogleMapsApiKey}>
      <div className="h-[650px] w-[750px]">
        <Map zoom={5}  mapId={constants.MapID}>
            <AdvancedMarker position={position} onClick={()=>setOpen(true)} >
                <Pin/>
            </AdvancedMarker>
            {open&&<InfoWindow position={position} onCloseClick={()=>setOpen(false)}>
                <p>I'm at Hamberg</p>

            </InfoWindow>}
        </Map>
      </div>
    </APIProvider>
  );
};

export default Page;
