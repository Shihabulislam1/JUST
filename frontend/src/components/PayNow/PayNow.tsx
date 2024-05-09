import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Text from "../Text/Text";

const PayNow = ({
  fare = 450,
  riderAccount = "0x21Fd62F8b34D174f536c8239543Bf895f3ACAbb9",
}: {
  fare: number;
  riderAccount: string;
}) => {
  return (
    <Card className="border-none bg-cream-100 rounded-xl px-32 py-12">
      <CardHeader className="text-center text-3xl font-semibold text-blue-950">
        Pay For Your Ride
      </CardHeader>
      <CardContent className="text-lg flex flex-col gap-8 mt-12">
        <Text text="Fare" value={fare} />
        <Text text="Rider Account" value={riderAccount} />
      </CardContent>
      <CardFooter className="flex justify-center items-center mt-12">
        <button className="button ">Pay Now</button>
      </CardFooter>
    </Card>
  );
};

export default PayNow;
