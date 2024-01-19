"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { instance } from "./axios/instance";
import { jwtDecode } from "jwt-decode";
export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    setError("");
    try {
      const res = await instance.post("login", {
        name,
        password,
      });
      const token = res.data.token;
      const tokenDecode = jwtDecode(token) as jwtToken;
      localStorage.setItem("name", tokenDecode.name);
      localStorage.setItem("incomeBills", tokenDecode.mensalIncomeBills);
      localStorage.setItem("incomeTickets", tokenDecode.mensalIncomeTickets);
      setError("");
      router.push("/home");
    } catch (e) {
      setError("Algo de errado, verifique.");
      console.error(e);
    }
  };

  return (
    <main className="flex flex-col bg-home">
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen gap-8 ">
        <h2 className="text-xl lg:text-4xl shadow-2xl w-64 lg:w-96 text-center border-b-4 p-4 border-purple-400">
          Hoje é o dia de pagar as{" "}
          <span className="text-green-400">contas</span> ?
        </h2>
        <div className="flex flex-col gap-4 rounded">
          <input
            type="text"
            placeholder="E-mail"
            className="p-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="p-2 "
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSignUp}
            className="bg-green-400 font-bold rounded p-2 text-zinc-900  border-b-2 hover:bg-red-400 transition-all"
          >
            Entrar
          </button>
          {error && error}
          <p
            className="text-yellow-400 text-end hover:border-b-2  cursor-pointer"
            onClick={() => router.push("/sign-up")}
          >
            Não tenho uma conta
          </p>
        </div>
      </div>

      <div className="p-4 lg:p-24 flex flex-col gap-10">
        <p className="text-xl lg:text-4xl shadow-2xl border-r-4">
          Organize a suas contas
        </p>
        <p className="text-end text-lg lg:text-4xl border-l-4 mt-4">
          E viva despreocupado
        </p>
      </div>
    </main>
  );
}

interface jwtToken {
  name: string;
  id: number;
  email: string;
  mensalIncomeBills: string;
  mensalIncomeTickets: string;
}
