import React from "react";
import { BiHide } from "react-icons/bi";
import MyExpenses from "../components/MyExpenses";
import ItensExpenses from "../components/ItensExpenses";
import { FaRegEdit } from "react-icons/fa";

function PageHome() {
  return (
    <main className="flex flex-col  items-center h-screen w-full bg-gray-100">
      <MyExpenses text={" Minhas Despesas - Renda Mensal"} span={"R$ 75,985"} />
      <ItensExpenses
        data={
          <div className="flex justify-between">
            <p>Meu Salario</p>
            <p className="text-red-700">-R$ 3,000</p>
            <FaRegEdit size={20} className="text-yellow-700 cursor-pointer" />
          </div>
        }
        total="RS$ 3,000"
      />
    </main>
  );
}

export default PageHome;
