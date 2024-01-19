import React, { ReactNode } from "react";

interface ItensExpenses {
  data: ReactNode;
  total: string;
  type: "Bills" | "Tickets";
}
function ItensExpenses({ data, total, type }: ItensExpenses) {
  return (
    <div className="bg-white w-11/12 lg:w-9/12 rounded-2xl  mt-10 h-full p-8 ">
      {data}

      <div className="mt-10 pb-2">
        Total do mês: <span className="text-green-700"> {total}</span>
      </div>
    </div>
  );
}

export default ItensExpenses;
