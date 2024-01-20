"use client";
import React, { useEffect, useState } from "react";
import MyExpenses from "../components/MyExpenses";
import ItensExpenses from "../components/ItensExpenses";
import IncomeBills, { incomeBillValue } from "../datas/incomeBills";
import { format, isToday, parseISO } from "date-fns";
import { fetchDataAndSetBills } from "../datas/takeBills";
import { BiDownArrowAlt } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
import { CiWarning } from "react-icons/ci";
import { removeBill } from "../datas/removeBill";
import Loading from "../loading";

function PageHome() {
  const [bills, setBills] = useState<myBills[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("nome")) {
      setLoading(false);
    } else {
      setLoading(true);
    }
    fetchDataAndSetBills(setBills);
  }, []);

  return (
    <>
      {loading ? (
        <div className=" h-full px-0 lg:px-24 pt-10">
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
                <div className="rounded-2xl mb-10 border-b-4 box-green border-green-100 pb-4">
                  <p className="flex gap-2 items-center mb-4 font-bold">
                    {" "}
                    <CiWarning size={40} className="text-black" /> Contas para
                    pagar hoje
                  </p>

                  {bills.map((bill) => (
                    <div key={bill._id}>
                      {isToday(parseISO(bill.date)) ? (
                        <div className="flex  font-bold text-sm justify-between items-center text-gray-800 px-2 ">
                          <div className="flex justify-between items-center w-full ">
                            <p className="w-1/3 overflow-auto">{bill.name}</p>
                            <p className="flex justify-center w-1/3">
                              {format(parseISO(bill.date), "dd/MM/yyyy ", {})}
                            </p>
                            <p className="flex justify-end w-1/3">
                              R${bill.price}
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              }
              data={
                <>
                  <div className=" py-4  flex gap-2 items-center">
                    Contas Gerais <BiDownArrowAlt />
                  </div>
                  {bills.length > 0 ? (
                    bills.map((bill) => (
                      <div
                        className="flex justify-between items-center mt-2 text-sm "
                        key={bill._id}
                      >
                        <div className="w-1/3 lg:w-1/4 overflow-auto  ">
                          <p className="border-b-2 shadow-lg">{bill.name}</p>
                        </div>
                        <div className="flex justify-center overflow-auto">
                          <p>
                            {format(parseISO(bill.date), "dd/MM/yyyy ", {})}
                          </p>
                        </div>
                        <div className="w-1/3 lg:w-1/4 flex justify-end gap-1   overflow-auto ">
                          <p className="text-red-700    ">R$ {bill.price}</p>
                          <FaDeleteLeft
                            size={24}
                            className="cursor-pointer hover:opacity-75 transition-all   "
                            onClick={() =>
                              removeBill(
                                bill._id,
                                fetchDataAndSetBills,
                                setBills
                              )
                            }
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
                incomeBillValue() -
                bills.reduce((acc, bill) => acc + bill.price, 0)
              }
            />
          </main>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default PageHome;

export interface myBills {
  name: string;
  price: number;
  date: string;
  _id: number;
}
