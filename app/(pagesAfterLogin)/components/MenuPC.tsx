import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";
import NameOfClient from "../datas/name";

function MenuPC() {
  return (
    <nav className="hidden fixed lg:flex bg-nav justify-between px-24 p-4 items-center w-full top-0  text-gray-100">
      <div className="flex gap-8 items-center">
        <div className="flex items-center gap-4">
          <Avatar />
          <NameOfClient />
        </div>
        <Link href={"/home"} className="hover:text-yellow-400">
          despesas gerais
        </Link>
        <Link href={"/slip"} className="hover:text-yellow-400">
          boletos
        </Link>
      </div>
      <p>Bancos & Cia</p>
    </nav>
  );
}

export default MenuPC;
