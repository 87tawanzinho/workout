import React, { ReactNode } from "react";

interface ItensExpenses {
  data: ReactNode;
  total: string;
}
function ItensExpenses({ data, total }: ItensExpenses) {
  return (
    <div className="bg-white w-11/12 lg:w-9/12 rounded-2xl mt-10 h-96 p-8">
      {data}

      <div className="absolute bottom-0">
        Total do mês: <span className="text-green-700"> {total}</span>
      </div>
    </div>
  );
}

export default ItensExpenses;
