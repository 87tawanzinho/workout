"use client";
import React, { ReactNode, useState } from "react";
import { ImInfo } from "react-icons/im";
import HowWorksTotal from "./HowWorksTotal";

interface ItensExpenses {
  data: ReactNode;
  total: number;
  type: "Bills" | "Tickets";
  payToday: ReactNode;
}
function ItensExpenses({ data, total, type, payToday }: ItensExpenses) {
  const [info, setInfo] = useState(false);
  return (
    <div className="bg-white w-11/12 lg:w-9/12 rounded-2xl  mt-10 h-full p-8 ">
      {payToday}
      {data}
      <div className="mt-10 pb-2 text-xl flex items-center gap-4">
        <div>
          Total do mês: R${" "}
          <span
            className={`${total <= -1 ? "text-red-600" : "text-green-600"}`}
          >
            {" "}
            {total}
          </span>
        </div>
        <ImInfo
          className="text-zinc-700 hover:opacity-75 transition-all cursor-pointer"
          onClick={() => setInfo(!info)}
        />
      </div>
      {info && <HowWorksTotal />}
    </div>
  );
}

export default ItensExpenses;
