import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Text from "../Text/Text";

const GetPay = ({
  fare = 450,
  userAccount = "0x21Fd62F8b34D174f536c8239543Bf895f3ACAbb9",
}: {
  fare: number;
  riderAccount: string;
}) => {
  return (
    <Card className="border-none bg-cream-100 rounded-xl px-24 py-12">
      <CardHeader className="text-center text-3xl font-semibold text-blue-950">
        Accepted Ride
      </CardHeader>
      <CardContent className="text-lg flex flex-col gap-8 mt-12">
        <Text text="Fare" value={fare} />
        <Text text="User Account" value={userAccount} />
      </CardContent>
      <CardFooter className="flex justify-center items-center mt-12 gap-8">
        <button className="button ">Request Payment</button>
        <button className=" bg-red-600 text-cream-100 button">Cancel Ride</button>
      </CardFooter>
    </Card>
  );
};

export default GetPay;
