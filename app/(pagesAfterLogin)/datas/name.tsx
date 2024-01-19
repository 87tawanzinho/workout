"use client";
import { useEffect, useState } from "react";
import gif from "@/public/money-bag.gif";
import Image from "next/image";
export default function NameOfClient() {
  const [name, setName] = useState<string | null>("");
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setName(localStorage.getItem("name"));
      console.log("Name from localStorage:", name);
    } else {
      console.warn("localStorage is not available on the server side");
    }
  }, []);

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <p>Olá, {name}</p>
      <p>Seja bem vindo{"(a)"}!</p>
      <Image src={gif} alt="animated gif" className="h-20 w-20 " />
    </div>
  );
}

export const justName = () => {
  const [name, setName] = useState<string | null>("");
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setName(localStorage.getItem("name"));
      console.log("Name from localStorage:", name);
    } else {
      console.warn("localStorage is not available on the server side");
    }
  }, []);
  return name;
};
