import React from "react";
import MyExpenses from "../components/MyExpenses";
import ItensExpenses from "../components/ItensExpenses";
import { FaRegEdit } from "react-icons/fa";
import IncomeTickets from "../datas/incomeTickets";
function MySlips() {
  return (
    <main className="flex flex-col  items-center h-screen w-full mt-10">
      <MyExpenses
        text="Meus boletos - Orçamento mensal de "
        income="Tickets"
        span={<IncomeTickets />}
      />
      <ItensExpenses
        data={
          <div className="flex justify-between">
            <p>Meus gastos</p>
            <p className="text-red-700">-R$ 100</p>
            <FaRegEdit size={20} className="text-yellow-700 cursor-pointer" />
          </div>
        }
        total="R$ 4,000"
      />
    </main>
  );
}

export default MySlips;
