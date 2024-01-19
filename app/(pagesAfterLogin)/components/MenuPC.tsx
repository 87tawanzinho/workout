import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";

function MenuPC() {
  return (
    <nav className="hidden lg:flex justify-between px-24 p-4 items-center bg-purple-400 relative text-gray-100">
      <div className="flex gap-8 items-center">
        <Avatar />
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
