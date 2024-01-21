"use client";
import React, { useState } from "react";
import { ImInfo } from "react-icons/im";
import HowWorksThis from "./HowWorksTotal";
import { FaPlus } from "react-icons/fa6";

function Slips() {
  const [info, setInfo] = useState(false);
  return (
    <div className="px-4 lg:px-60 pb-10 ">
      <div className="mt-20 p-4 w-full  rounded-2xl lg:w-96 flex flex-col   bg-white    ">
        {" "}
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-md text-start">Meus Boletos</p>
            <ImInfo
              className="cursor-pointer hover:opacity-75"
              onClick={() => setInfo(!info)}
            />
          </div>

          <FaPlus className="text-red-800 cursor-pointer hover:opacity-75" />
        </div>
        {info && (
          <HowWorksThis
            text="Aqui, você encontrará e registrará boletos que precisa lembrar de pagar."
            type="unique"
          />
        )}
      </div>
    </div>
  );
}

export default Slips;
