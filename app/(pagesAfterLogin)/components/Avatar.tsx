import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";

function Avatar() {
  return (
    <CgProfile size={30} className="text-black bg-gray-200 rounded-full" />
  );
}

export default Avatar;
