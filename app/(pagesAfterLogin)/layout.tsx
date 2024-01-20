import React from "react";
import MenuMobile from "./components/MenuMobile";
import MenuPC from "./components/MenuPC";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" ">
      <MenuPC />
      <MenuMobile />

      <div className="mt-20">{children}</div>
    </div>
  );
}

export default HomeLayout;
