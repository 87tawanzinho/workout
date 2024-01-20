"use client";
import React, { useEffect, useState } from "react";
import MyExpenses from "../components/MyExpenses";
import ItensExpenses from "../components/ItensExpenses";
import NameOfClient, { justName } from "../datas/name";
import IncomeBills, { incomeBillValue } from "../datas/incomeBills";
import { fetchDataAndSetBills } from "../datas/takeBills";
import { BiEdit } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
import { instance } from "@/app/axios/instance";

function PageHome() {
  const [bills, setBills] = useState<myBills[]>([]);

  useEffect(() => {
    fetchDataAndSetBills(setBills);
  }, []);

  const removeBill = async (id: number) => {
    try {
      const userName = localStorage.getItem("name");
      const res = await instance.put(`deleteOneBill/${userName}`, { id });
      console.log(res);
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
          data={
            <>
              {bills.length > 0 ? (
                bills.map((bill) => (
                  <div
                    className="flex justify-between items-center"
                    key={bill._id}
                  >
                    <p className="w-40 mb-4 border-b-2 shadow-lg">
                      {bill.name}
                    </p>
                    <div className=" overflow-auto">
                      <p>{bill.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-red-700 overflow-auto w-20">
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
