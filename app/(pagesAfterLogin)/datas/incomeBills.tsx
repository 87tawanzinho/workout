"use client";
import { useEffect, useState } from "react";

export default function IncomeBills() {
  const [incomeBills, setIncomeBills] = useState<string | null>("");
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setIncomeBills(localStorage.getItem("incomeBills"));
      console.log("IncomeBills from localStorage:", IncomeBills);
    } else {
      console.warn("localStorage is not available on the server side");
    }
  }, []);

  return <p>R$ {incomeBills !== "undefined" ? incomeBills : 0} </p>;
}
