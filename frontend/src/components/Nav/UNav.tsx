import React from "react";

const UNav = ({
  role = "User",
  account = "0x21Fd62F8b34D174f536c8239543Bf895f3ACAbb9",
}: {
  role: string;
  account: string;
}) => {
  return (
    <nav className="w-full h-20 flex justify-between bg-blue-950 px-4 items-center">
      <p className="h-16 px-4 py-4 rounded-md font-bold text-cream-400 text-3xl ml-12">
        {role}
      </p>
      <p className="bg-blue-100 px-4 py-4 text-blue-900 rounded-xl font-semibold">{account}</p>
    </nav>
  );
};

export default UNav;
