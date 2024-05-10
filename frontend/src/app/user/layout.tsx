"use client";

import LNav from "@/components/Nav/LNav";
import UNav from "@/components/Nav/UNav";
import React, { useEffect } from "react";
import { UserAddressProvider } from "@/contexts/user.context";

const User = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <UserAddressProvider>
      <section className="bg-gray-950 h-screen">
        <UNav role="User" />
        <LNav
          text1="Book A Ride"
          text2="Pay For A Ride"
          link1="/user"
          link2="/user/pay"
        />
        {children}
      </section>
    </UserAddressProvider>
  );
};

export default User;
