"use client";
import { instance } from "@/app/axios/instance";
import React, { ReactNode, useState } from "react";
import { BiHide } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";
import { justName } from "../datas/name";
interface Expenses {
  text: string;
  span?: ReactNode;
  income: "Bills" | "Tickets";
}
function MyExpenses({ text, span, income }: Expenses) {
  const [openInput, setOpenInput] = useState(false);
  const [value, setValue] = useState("");
  const name = justName();
  console.log(name);
  const handleChangeNumberIncomeOrTickets = async () => {
    if (income === "Bills") {
      try {
        const res = await instance.put("/newIncomeBills", {
          name,
          mensalIncomeBills: value,
        });
        setOpenInput(false);
        localStorage.setItem("incomeBills", value);
      } catch (error) {
        console.log(error);
      }
    } else {
      if (income === "Tickets") {
        try {
          const res = await instance.put("/newIncomeTickets", {
            name,
            mensalIncomeTickets: value,
          });
          localStorage.setItem("incomeTickets", value);
          setOpenInput(false);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <div className="bg-white w-11/12 lg:w-9/12 rounded-2xl mt-10 p-2 lg:p-12">
      {!openInput && (
        <div className="text-sm lg:text-lg  flex flex-col lg:flex-row gap-2 items-center">
          <h2> {text}</h2>
          <div className="flex gap-4 items-center">
            {" "}
            <span className="text-purple-600">{span}</span>{" "}
            <BiHide className="cursor-pointer" />
            <MdModeEditOutline
              className="cursor-pointer"
              onClick={() => setOpenInput(true)}
            />
          </div>
        </div>
      )}
      {openInput && (
        <div className="flex flex-wrap gap-4">
          <input
            type="number"
            placeholder="Nova renda mensal"
            className="h-8 bg-gray-100 rounded-lg"
            onChange={(e) => setValue(e.target.value)}
          />

          <button
            className="bg-purple-400 w-32 rounded-lg"
            onClick={handleChangeNumberIncomeOrTickets}
          >
            Salvar
          </button>
          <button
            className="bg-red-400 w-16 rounded-lg"
            onClick={() => setOpenInput(false)}
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}

export default MyExpenses;
