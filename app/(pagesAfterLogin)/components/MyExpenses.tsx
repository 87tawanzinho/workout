import React from "react";
import { BiHide } from "react-icons/bi";
interface Expenses {
  text: string;
  span?: string;
}
function MyExpenses({ text, span }: Expenses) {
  return (
    <div className="bg-white w-11/12 lg:w-9/12 rounded-2xl mt-10">
      <h2 className="text-sm lg:text-lg p-2 lg:p-12 flex flex-col lg:flex-row gap-2 items-center">
        {text}
        <div className="flex gap-4 items-center">
          {" "}
          <span className="text-purple-600">{span}</span>{" "}
          <BiHide className="cursor-pointer" />
        </div>
      </h2>
    </div>
  );
}

export default MyExpenses;
