import PayNow from "@/components/PayNow/PayNow";
import React from "react";

const Pay = () => {
  return (
    <div className="max-w-[1150px] m-auto mt-12">
      <PayNow
        fare={450}
        riderAccount="0x21Fd62F8b34D174f536c8239543Bf895f3ACAbb9"
      />
    </div>
  );
};

export default Pay;
