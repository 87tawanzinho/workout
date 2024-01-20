"use client";
import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";
import NameOfClient from "../datas/name";
import { usePathname } from "next/navigation";

function MenuPC() {
  const path = usePathname();
  return (
    <nav className="hidden fixed lg:flex z-50  lg:flex-row-reverse bg-nav justify-between px-24 p-4 items-center w-full top-0  text-gray-100">
      <div className="flex gap-8 items-center">
        <div className="flex items-center gap-4">
          <Avatar />
          <NameOfClient />
        </div>
        <Link
          href={"/home"}
          className={`${
            path === "/home" && "border-b-2 border-green-200 rounded"
          } hover:text-yellow-400`}
        >
          despesas gerais
        </Link>
        <Link
          href={"/slip"}
          className={`${
            path === "/slip" && "border-b-2 border-green-200 rounded"
          } hover:text-yellow-400`}
        >
          boletos
        </Link>
      </div>
      <p className="text-xl font-sans italic">Monify</p>
    </nav>
  );
}

export default MenuPC;
