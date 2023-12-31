"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormRegister() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [text, setText] = useState("");
  const [sucess, setSucess] = useState("");
  const [warn, setWarn] = useState("");
  const { push } = useRouter();
  const handleUsername = (e: any) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e: any) => {
    setPasswordConfirm(e.target.value);
  };

  const axiosRequest = async () => {
    setWarn("Aguarde, estamos tentando criar sua conta.");
    if (!username || !password) {
      return setText("Preencha todas as informações");
    }
    if (password !== passwordConfirm) {
      return setText("Senhas não coincidem");
    }
    try {
      const api = await axios.post(
        "https://workout-api-taws-projects.vercel.app/",
        {
          user: username,
          password: password,
        }
      );
      console.log(api);
      setWarn("");
      setText("");
      setSucess("Criado com sucesso");
      setTimeout(() => {
        push("/");
      }, 2000);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={handleUsername}
        className="p-2 rounded"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={handlePassword}
        className="p-2 rounded"
      />
      <input
        type="password"
        placeholder="Confirmar Senha"
        value={passwordConfirm}
        onChange={handleConfirmPassword}
        className="p-2 rounded"
      />
      <button
        className="p-2  absolute end-0 bottom-0 bg-yellow-500 text-black rounded hover:bg-yellow-400 "
        onClick={axiosRequest}
      >
        Cadastrar
      </button>

      {text ? <p className="text-sm text-red-600">{text}</p> : null}
      {sucess ? (
        <p className="text-sm text-green-600 sucess">{sucess}</p>
      ) : null}
      {!text || !sucess ? (
        <p className="text-sm text-orange-500">{warn}</p>
      ) : null}
    </div>
  );
}
