"use client";
import { instance } from "@/app/axios/instance";
import React, { Dispatch, ReactNode, useState } from "react";
import { BiHide } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { justName } from "../datas/name";
import { IoMdAddCircleOutline } from "react-icons/io";
import { fetchDataAndSetBills } from "../datas/takeBills";
interface Expenses {
  text: string;
  span?: ReactNode;
  income: "Bills" | "Tickets";
  setData: Dispatch<any>;
}
function MyExpenses({ text, span, income, setData }: Expenses) {
  const [openInput, setOpenInput] = useState(false);
  const [openNew, setopenNew] = useState(false);
  const [value, setValue] = useState("");
  const [hide, setHide] = useState(true);
  const [newPay, setNewPay] = useState<newPay>();
  const myName = justName();

  const handleChangeNumberIncomeOrTickets = async () => {
    if (income === "Bills") {
      try {
        const res = await instance.put("/newIncomeBills", {
          name: myName,
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
            name: myName,
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

  const newCost = async () => {
    const res = await instance.put("newBill", {
      userName: localStorage.getItem("name"),
      name: newPay?.description,
      price: newPay?.price,
      date: newPay?.date,
    });
    setopenNew(false);
    fetchDataAndSetBills(setData);
    console.log(res);
  };
  return (
    <div className="bg-white w-11/12 lg:w-9/12 rounded-2xl mt-10 p-2 lg:p-12">
      {!openInput && (
        <div className="text-sm lg:text-lg  flex flex-col lg:flex-row gap-2 items-center">
          <h2> {text}</h2>
          <div className="flex gap-4 items-center">
            {" "}
            <span className={`${hide ? "blur-sm" : null} text-green-600`}>
              {span}
            </span>{" "}
            <BiHide
              className="cursor-pointer hover:opacity-75"
              size={20}
              onClick={() => setHide(!hide)}
            />
            <MdModeEditOutline
              className="cursor-pointer hover:opacity-75"
              size={20}
              onClick={() => setOpenInput(true)}
            />
            <IoMdAddCircleOutline
              className="text-red-700 cursor-pointer heart hover:opacity-75"
              size={20}
              onClick={() => setopenNew(true)}
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

      {openNew && (
        <div className=" flex items-center justify-center h-full top-0 left-0 fixed w-full bg-black bg-opacity-75">
          <div className=" rounded-xl shadow-2xl bg-white w-11/12 lg:w-9/12 h-auto py-8 px-4 relative">
            <p
              className="max-w-min  absolute end-4 top-4 text-red-700 cursor-pointer hover:opacity-75"
              onClick={() => setopenNew(false)}
            >
              X
            </p>

            <p className="text-xl">
              {income === "Bills" ? "Nova Despesa" : "Novo Boleto"}
            </p>
            <div className="flex  flex-col gap-4 flex-wrap">
              <div className="flex gap-0 lg:gap-4 flex-wrap">
                <div className="flex flex-col mt-4 text-gray-700">
                  <span>Descrição</span>
                  <input
                    type="text"
                    className="  "
                    name="description"
                    onChange={(e) =>
                      setNewPay(
                        (prev) =>
                          ({
                            ...prev,
                            [e.target.name]: e.target.value,
                          } as newPay)
                      )
                    }
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <span>Preço</span>
                  <input
                    type="number"
                    className="  "
                    name="price"
                    onChange={(e) =>
                      setNewPay(
                        (prev) =>
                          ({
                            ...prev,
                            [e.target.name]: e.target.value,
                          } as newPay)
                      )
                    }
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <span>Data de Pagamento</span>
                  <input
                    type="date"
                    className=" "
                    placeholder="Custo"
                    name="date"
                    onChange={(e) =>
                      setNewPay(
                        (prev) =>
                          ({
                            ...prev,
                            [e.target.name]: e.target.value,
                          } as newPay)
                      )
                    }
                  />
                </div>
                {income === "Tickets" && <p>Todo</p>}
              </div>

              <textarea
                placeholder="Observação"
                className="w-64  "
                name="observation"
                onChange={(e) =>
                  setNewPay(
                    (prev) =>
                      ({ ...prev, [e.target.name]: e.target.value } as newPay)
                  )
                }
              />

              <div className="flex justify-center mt-10">
                <MdDone
                  onClick={newCost}
                  className="bg-green-400 rounded-full text-green-100 cursor-pointer hover:bg-black transition-all"
                  size={80}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyExpenses;

interface newPay {
  description: string;
  price: number;
  observation: string;
  date: String;
}
