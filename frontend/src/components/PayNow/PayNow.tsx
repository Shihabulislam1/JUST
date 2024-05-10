"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Text from "../Text/Text";
import { useState } from "react";
import { useUserAddress } from "@/contexts/user.context";
import { weiToTaka } from "@/constants/constants";

const PayNow = ({
  booking2,
  setBooking2,
}: {
  booking2: any;
  setBooking2: any;
}) => {
  const { contract1 } = useUserAddress();
  const [paying, setPaying] = useState(false);
  const [cancelling, setCancelling] = useState(false);

  const handlePayment = async () => {
    try {
      setPaying(true);
      await contract1.rideFare();
      await contract1.sendEthRider(booking2.RidermetaID,{value: booking2.fare});
      setPaying(false);
      await setBooking2(null);
      await alert("Payment Successful");
      await (window as any).location.reload();
    } catch (error) {
      alert(error);
    } finally {
      setPaying(false);
    }
  };

  const handleCancel = async () => {
    try {
      setCancelling(true);
      await contract1.deleteBooking();
      setCancelling(false);
      await setBooking2(null);
      await alert("Ride Cancelled");
      await (window as any).location.reload();
    } catch (error) {
      alert(error);
    } finally {
      setCancelling(false);
    }
  };

  return booking2 === null ? (
    <div>No Rider accepted request or no request created</div>
  ) : (
    <Card className="border-none bg-cream-100 rounded-xl px-24 py-12">
      <CardHeader className="text-center text-3xl font-semibold text-blue-950">
        Pay For Your Ride
      </CardHeader>
      <CardContent className="text-lg flex flex-col gap-8 mt-12">
        <Text text="Fare" value={String(weiToTaka(booking2?.fare))} />
        <Text text="Rider Account" value={booking2.RidermetaID} />
      </CardContent>
      <CardFooter className="flex justify-center items-center mt-12 gap-8">
        <button className="button " onClick={handlePayment}>{paying ? "Paying..." : "Pay Now"}</button>
        <button className="bg-red-600 text-cream-100 button" onClick={handleCancel}>
          {cancelling ? "Cancelling..." : "Cancel Ride"}
        </button>
      </CardFooter>
    </Card>
  );
};

export default PayNow;
