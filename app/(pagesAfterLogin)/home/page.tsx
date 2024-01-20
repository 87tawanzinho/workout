"use client";
import React, { useEffect, useState } from "react";
import MyExpenses from "../components/MyExpenses";
import ItensExpenses from "../components/ItensExpenses";
import NameOfClient, { justName } from "../datas/name";
import IncomeBills, { incomeBillValue } from "../datas/incomeBills";
import { format, isToday, parseISO } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";

import { fetchDataAndSetBills } from "../datas/takeBills";
import { BiEdit } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
import { instance } from "@/app/axios/instance";
import { CiWarning } from "react-icons/ci";

function PageHome() {
  const timeZone = "America/Sao_Paulo";
  const [bills, setBills] = useState<myBills[]>([]);

  useEffect(() => {
    fetchDataAndSetBills(setBills);
  }, []);

  const removeBill = async (id: number) => {
    try {
      const userName = localStorage.getItem("name");
      const res = await instance.put(`deleteOneBill/${userName}`, { id });
      console.log(res);
      fetchDataAndSetBills(setBills);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" h-screen px-0 lg:px-24 pt-10">
      <main className="flex flex-col  items-center w-full">
        <MyExpenses
          text={" Minhas Despesas - Renda Mensal"}
          income="Bills"
          setData={setBills}
          span={<IncomeBills />}
        />
        <ItensExpenses
          type="Bills"
          payToday={
            <>
              {bills.map((bill) => (
                <div key={bill._id}>
                  {isToday(parseISO(bill.date)) ? (
                    <div className="rounded-2xl mb-10 border-b-4 shadow-2xl border-red-200 pb-4">
                      <p className="flex gap-2 items-center mb-4">
                        {" "}
                        <CiWarning size={40} className="text-red-600" /> -
                        Contas para pagar hoje
                      </p>
                      <div className="flex gap-4 text-gray-800 px-2">
                        <p>{bill.name}</p>
                        <p>{format(parseISO(bill.date), "dd/MM/yyyy ", {})}</p>
                        <p>R${bill.price}</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </>
          }
          data={
            <>
              {bills.length > 0 ? (
                bills.map((bill) => (
                  <div
                    className="flex justify-between items-center mt-2 text-sm"
                    key={bill._id}
                  >
                    <p className="  border-b-2 shadow-lg w-30 lg:w-40">
                      {bill.name}
                    </p>
                    <div className=" overflow-auto w-30 ">
                      <p> {format(parseISO(bill.date), "dd/MM/yyyy ", {})}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-red-700 overflow-auto ">
                        -R$ {bill.price}
                      </p>
                      <FaDeleteLeft
                        size={24}
                        className="cursor-pointer hover:opacity-75 transition-all"
                        onClick={() => removeBill(bill._id)}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p>Ainda não há nada aqui</p>
              )}
            </>
          }
          total={
            incomeBillValue() - bills.reduce((acc, bill) => acc + bill.price, 0)
          }
        />
      </main>
    </div>
  );
}

export default PageHome;

interface myBills {
  name: string;
  price: number;
  date: string;
  _id: number;
}
