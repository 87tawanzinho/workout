import React from "react";
import MenuMobile from "./components/MenuMobile";
import MenuPC from "./components/MenuPC";
import { PageWrapper } from "./emotion/page-wrapper";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" ">
      <MenuPC />
      <MenuMobile />
      <PageWrapper>
        <div className="mt-20">{children}</div>
      </PageWrapper>
    </div>
  );
}

export default HomeLayout;
