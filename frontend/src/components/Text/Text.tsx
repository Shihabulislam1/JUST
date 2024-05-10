import React from "react";

const Text = ({ text, value }: { text: string; value: any }) => {
  return (
    <div className="flex gap-12 items-center justify-between">
      <p className="text-2xl text-blue-950 font-medium"> {text}:</p>
      <p className="bg-cream-50 w-[540px] px-4 py-4 rounded-xl ">{value}</p>
    </div>
  );
};

export default Text;
