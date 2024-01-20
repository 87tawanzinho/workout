"use client";
import { useEffect, useState } from "react";
import gif from "@/public/money-bag.gif";
import Image from "next/image";
export default function NameOfClient() {
  const [name, setName] = useState<string | null>("");
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setName(localStorage.getItem("name"));
    } else {
      console.warn("localStorage is not available on the server side");
    }
  }, []);

  if (!name) {
    return <p className="blur-sm">cliente</p>;
  }

  return <p>Olá, {name}</p>;
}

export const justName = () => {
  const [name, setName] = useState<string | null>("");
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setName(localStorage.getItem("name"));
    } else {
      console.warn("localStorage is not available on the server side");
    }
  }, []);
  return name;
};
