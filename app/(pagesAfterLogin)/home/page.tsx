"use client";
import React, { useEffect, useState } from "react";
import { BiHide } from "react-icons/bi";
import MyExpenses from "../components/MyExpenses";
import ItensExpenses from "../components/ItensExpenses";
import NameOfClient, { justName } from "../datas/name";
import IncomeBills, { incomeBillValue } from "../datas/incomeBills";
import { fetchDataAndSetBills } from "../datas/takeBills";

function PageHome() {
  const [bills, setBills] = useState<myBills[]>([]);

  useEffect(() => {
    fetchDataAndSetBills(setBills);
  }, []);
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
                  <div className="flex justify-between ">
                    <p className="w-40 mb-4 border-b-2 shadow-lg">
                      {bill.name}
                    </p>
                    <p className="text-red-700 w-20">-R$ {bill.price}</p>
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
}
