"use client";
import React, { useState } from "react";
import { GiBurningBook } from "react-icons/gi";
function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      console.log(email, password);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 justify-center items-center min-h-screen bg-home ">
      <div className="flex  items-center justify-center gap-4 text-2xl">
        <p className="text-lg">O melhor jeito de se preparar</p>
        <GiBurningBook size={60} />
      </div>
      <div className="flex flex-col gap-4 rounded">
        <input
          type="text"
          placeholder="Nome"
          className="p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="E-mail"
          className="p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar Senha"
          className="p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSignUp}
          className="bg-yellow-400 rounded p-2 text-black font-bold hover:bg-green-400 transition-all"
        >
          Criar uma nova conta
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
