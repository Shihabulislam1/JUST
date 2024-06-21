"use client";

import React, { useState, useEffect } from "react";
import RideCard from "../../components/RideCard/RideCard";
import { useRiderAddress } from "../../contexts/rider.context";

const Rider = () => {
  const { contract2 } = useRiderAddress();
  const [bookingRequests, setBookingRequests] = useState<any[]>([]);

  useEffect(() => {
    if (contract2) {
      const fetchUsers = async () => {
        const users = await contract2.getAllUsers();
        setBookingRequests(await users.map((user: any) => user));
      };

      fetchUsers();
    }
  }, [contract2]);

  useEffect(() => {
    if (bookingRequests.length > 0) {
      console.log(bookingRequests);
    }
  }, [bookingRequests]);

  return (
    <div>
      <h2 className="text-blue-950 font-semibold text-center text-[32px]">
        Booking Requests
      </h2>
      <div className="px-12 py-4 grid grid-cols-2 gap-x-2 gap-y-2 ">
        {bookingRequests.length === 0 ? (
          <p>Loading</p>
        ) : (
          bookingRequests.map(
            (request) =>
              request.name !== "" &&(
                <RideCard
                  key={`${request.time}+${Math.random()}`}
                  request={request}
                  contract={contract2}
                />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Rider;
