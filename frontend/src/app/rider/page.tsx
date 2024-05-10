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
    <div className="px-64 py-16 flex flex-col gap-12">
      {bookingRequests.length === 0 ? (
        <p>Loading</p>
      ) : (
        bookingRequests.map((request) => {
          return (
            <RideCard
              key={`${request.time}+${Math.random()}`}
              request={request}
              contract={contract2}
            />
          );
        })
      )}
    </div>
  );
};

export default Rider;
