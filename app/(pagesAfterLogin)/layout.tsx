import React from "react";
import MenuMobile from "./components/MenuMobile";
import MenuPC from "./components/MenuPC";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MenuPC />
      <MenuMobile />
      {children}
    </div>
  );
}

export default HomeLayout;
