import LNav from "@/components/Nav/LNav";
import UNav from "@/components/Nav/UNav";
import React, { Children } from "react";

const User = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="bg-gray-950 h-screen">
      <UNav role="User" account="0x21Fd62F8b34D174f536c8239543Bf895f3ACAbb9" />
      <LNav
        text1="Book A Ride"
        text2="Pay For A Ride"
        link1="/user"
        link2="user/pay"
      />
      {children}
    </section>
  );
};

export default User;
