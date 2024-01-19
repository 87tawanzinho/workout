import Image from "next/image";
import React from "react";
import avatar from "@/public/avatar.png";
function Avatar() {
  return <Image src={avatar} alt="avatar" />;
}

export default Avatar;
