import React from "react";
import GetPay from "@/components/GetPay/GetPay";

const page = () => {
  return (
    <div>
      <GetPay 
        fare={450} 
        userAccount="0x21Fd62F8b34D174f536c8239543Bf895f3ACAbb9"
      />
    </div>
  );
};

export default page;
