"use client";
import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { IoMdMenu } from "react-icons/io";
import Avatar from "./Avatar";
import Link from "next/link";
import { justName } from "../datas/name";
function MenuMobile() {
  const name = justName();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="flex fixed lg:hidden px-2 bg-nav p-2  justify-between items-center text-xl w-full top-0  ">
      <h2 className="font-sans italic">Monify</h2>
      <IoMdMenu size={40} onClick={() => setOpenMenu(true)} />

      {openMenu && (
        <div className="h-screen w-full absolute top-0 left-0 text-zinc-900 bg-black bg-opacity-40 flex ">
          <div className="bg-white h-full w-11/12 p-4">
            <div className="flex justify-between px-4 items-center">
              <h3 className="text-gray-800">Meu Perfil</h3>
              <VscChromeClose onClick={() => setOpenMenu(false)} />
            </div>

            <div className="mt-10 px-10 flex gap-4 items-center text-lg">
              <Avatar />
              <p>- {name}</p>
            </div>

            <div className="flex flex-col mt-10 text-lg">
              <Link
                href={"/home"}
                className="border-b-2 shadow-lg"
                onClick={() => setOpenMenu(false)}
              >
                Despesas
              </Link>
              <Link
                href={"/slip"}
                className="mt-10 border-b-2 shadow-lg"
                onClick={() => setOpenMenu(false)}
              >
                Boletos
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MenuMobile;
