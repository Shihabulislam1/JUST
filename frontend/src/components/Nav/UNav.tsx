import React from "react";

const UNav = ({
  role = "User",
  account = "0x21Fd62F8b34D174f536c8239543Bf895f3ACAbb9",
}: {
  role: string;
  account: string;
}) => {
  return (
    <nav>
      <p>{role}</p>
      <p>{account}</p>
    </nav>
  );
};

export default UNav;
