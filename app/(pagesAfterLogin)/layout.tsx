import React from "react";
import MenuMobile from "./components/MenuMobile";
import MenuPC from "./components/MenuPC";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 h-full">
      <MenuPC />
      <MenuMobile />

      {children}
    </div>
  );
}

export default HomeLayout;
