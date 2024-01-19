"use client";
import { useEffect, useState } from "react";

export default function IncomeTickets() {
  const [incomeTickets, setIncomeTickets] = useState<string | null>("");
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setIncomeTickets(localStorage.getItem("incomeTickets"));
      console.log("IncomeTickets from localStorage:", IncomeTickets);
    } else {
      console.warn("localStorage is not available on the server side");
    }
  }, []);

  return <p>R$ {incomeTickets !== "undefined" ? incomeTickets : 0} </p>;
}
