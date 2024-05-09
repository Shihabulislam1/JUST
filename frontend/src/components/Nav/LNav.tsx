import Link from "next/link";
import React from "react";

const LNav = ({
  text1,
  text2,
  link1,
  link2,
}: {
  text1: string;
  text2: string;
  link1: string;
  link2: string;
}) => {
  return (
    <nav className="w-full py-2 flex justify-center items-center bg-cream-400">
      <ul className="flex gap-24 justify-center items-center">
        <Link href={link1} className="text-blue-950 font-bold text-2xl ">
          <li>{text1}</li>
        </Link>
        <Link href={link2} className="text-blue-950 font-bold text-2xl">
          <li>{text2}</li>
        </Link>
      </ul>
    </nav>
  );
};

export default LNav;
