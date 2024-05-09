import LNav from "@/components/Nav/LNav";
import UNav from "@/components/Nav/UNav";
import React, { Children } from "react";

const Rider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      <UNav role="Rider" account="0x21Fd62F8b34D174f536c8239543Bf895f3ACAbb9" />
      <LNav text1="Availabe Rides" text2="Accepted Rides" link1="/rider" link2="rider/accepted-ride" />
      {children}
    </section>
  );
};

export default Rider;