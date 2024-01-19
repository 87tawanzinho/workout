import React from "react";
import { BiHide } from "react-icons/bi";
import MyExpenses from "../components/MyExpenses";
import ItensExpenses from "../components/ItensExpenses";
import { FaRegEdit } from "react-icons/fa";
import NameOfClient from "../datas/name";
import IncomeBills from "../datas/incomeBills";

function PageHome() {
  return (
    <div className=" h-screen px-0 lg:px-24 pt-10">
      <div className=" bg-white h-auto lg:h-60  w-full lg:w-60  p-8 ml-0 lg:ml-40 mt-4 lg:mt-10  rounded-lg  flex ">
        <NameOfClient />
      </div>

      <main className="flex flex-col  items-center w-full">
        <MyExpenses
          text={" Minhas Despesas - Renda Mensal"}
          income="Bills"
          span={<IncomeBills />}
        />
        <ItensExpenses
          type="Bills"
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
    </div>
  );
}

export default PageHome;
