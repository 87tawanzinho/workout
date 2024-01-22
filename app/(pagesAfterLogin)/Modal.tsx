"use client";
import React, { useState } from "react";
import { ImInfo } from "react-icons/im";
import { PageWrapper } from "./emotion/page-wrapper";
import HowWorksThis from "./components/HowWorksTotal";
import { MdDone } from "react-icons/md";
import { instance } from "../axios/instance";
import { fetchDataAndSetBills } from "./datas/takeBills";
import { fetchDataAndSetSlips } from "./datas/takeSlips";

interface ModalProps {
  setopenNew: React.Dispatch<React.SetStateAction<boolean>>;
  income: string;
  setData: React.Dispatch<React.SetStateAction<any>>;
  setNewPay: React.Dispatch<React.SetStateAction<any>>;
  info: boolean;
  setOpenInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setopenNew, income, setData, info, setOpenInfo }: ModalProps) {
  const [newPay, setNewPay] = useState<newPay>();
  const [warning, setWarning] = useState("");
  const newCost = async () => {
    if (income === "Bills") {
      if (!newPay?.description || !newPay?.price || !newPay?.date) {
        return setWarning("Preencha todos os campos para prosseguir.");
      }

      if (newPay.description.length <= 3 || newPay.description.length > 12) {
        return setWarning(
          "A descrição tem que ter no minimo 4 dígitos e no maximo 12."
        );
      }

      if (newPay.price <= 0) {
        return setWarning("O preço precisa ser maior que 0.");
      }

      setWarning("Aguarde, estamos registrando..");
      try {
        const res = await instance.put("newBill", {
          userName: localStorage.getItem("name"),
          name: newPay?.description,
          price: newPay?.price,
          date: newPay?.date,
          observation: newPay?.observation,
        });
        setWarning("");
        setopenNew(false);
        fetchDataAndSetBills(setData);
        console.log(res);
      } catch (error) {
        setWarning("Um erro ocorreu, verifique novamente.");
      }
    } else {
      if (
        !newPay?.description ||
        !newPay?.price ||
        !newPay?.date ||
        !newPay?.code
      ) {
        return setWarning("Preencha todos os campos para prosseguir.");
      }

      if (newPay.description.length <= 3 || newPay.description.length > 12) {
        return setWarning(
          "A descrição tem que ter no minimo 4 dígitos e no maximo 12."
        );
      }

      if (newPay.price <= 0) {
        return setWarning("O preço precisa ser maior que 0.");
      }

      setWarning("Aguarde, estamos registrando..");
      try {
        const res = await instance.put("newSlip", {
          userName: localStorage.getItem("name"),
          name: newPay?.description,
          price: newPay?.price,
          date: newPay?.date,
          code: newPay?.code,
        });
        setWarning("");
        setopenNew(false);
        fetchDataAndSetSlips(setData); // todo
        console.log(res);
      } catch (error) {
        setWarning("Um erro ocorreu, verifique novamente.");
      }
    }
  };

  return (
    <div>
      {" "}
      <div className=" flex items-center justify-center h-full top-0 left-0 fixed w-full bg-black bg-opacity-40">
        <div className=" rounded-xl shadow-2xl bg-white w-11/12 lg:w-9/12 h-auto py-8 px-4 relative">
          <p
            className="max-w-min  absolute end-4 top-4 text-red-700 cursor-pointer hover:opacity-75"
            onClick={() => setopenNew(false)}
          >
            X
          </p>

          <div className="flex gap-2 items-center">
            <p className="text-xl">
              {income === "Bills" ? "Nova Despesa" : "Novo Boleto"}
            </p>
            <ImInfo
              className="cursor-pointer hover:opacity-75"
              size={18}
              onClick={() => setOpenInfo(!info)}
            />
          </div>
          <div className="flex  flex-col gap-4 flex-wrap">
            <div className="flex gap-0 lg:gap-4 flex-wrap">
              <div className="flex flex-col mt-4 text-gray-700">
                <span>Descrição</span>
                <input
                  type="text"
                  className={`${income !== "Bills" && "border-red-400"} `}
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
                  className={`${income !== "Bills" && "border-red-400"} `}
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
                  className={`${income !== "Bills" && "border-red-400"} `}
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
            </div>

            {income === "Bills" ? (
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
            ) : (
              <textarea
                placeholder="Codigo de Barras"
                className="w-64 border-red-400"
                name="code"
                onChange={(e) =>
                  setNewPay(
                    (prev) =>
                      ({ ...prev, [e.target.name]: e.target.value } as newPay)
                  )
                }
              />
            )}
            {warning && <p className="text-sm">{warning}</p>}
            <PageWrapper>
              {info && (
                <HowWorksThis
                  text={`${
                    income === "Bills"
                      ? "Aqui você definirá suas despesas; certifique-se de preencher todos os dados. O campo de observação não é obrigatório, mas pode ser útil em caso de lembretes adicionais."
                      : "Aqui você definirá seus boletos; certifique-se de preencher todos os dados. No dia do pagamento você poderia copiar o codigo."
                  }`}
                />
              )}
            </PageWrapper>

            <div className="flex justify-center mt-10">
              <MdDone
                onClick={newCost}
                className={`${
                  income === "Bills" ? "bg-sky-400" : "bg-red-400"
                } rounded-full text-green-100 cursor-pointer hover:bg-black transition-all`}
                size={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

export interface newPay {
  description?: string;
  price?: number;
  code?: string;
  observation?: string;
  date?: String;
}