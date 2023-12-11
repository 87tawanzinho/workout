"use client";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
interface ApiI {
  msg: string;
  token: string;
  data: {
    token: string;
  };
}
export default function FormLogin() {
  const { push } = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [warn, setWarn] = useState("");
  const [sucess, setSucess] = useState("");

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const axiosRequest = async (): Promise<any> => {
    setWarn("Se conectando...");
    try {
    
      const api: ApiI = await axios.post(
        "https://workout-api-taws-projects.vercel.app/login",
        {
          user: username,
          password: password,
        }
      );
      const token = api.data.token;
      const decoded: any = jwtDecode(token);
      console.log(decoded);
      localStorage.setItem("username", decoded.username);
      localStorage.setItem("exercises", decoded.exercises);
      localStorage.setItem("cartas", decoded.cartas);
      localStorage.setItem("id", decoded.id);
      setText("");
      setWarn("");
      setSucess("Autenticado com sucesso");
      setTimeout(() => {
        push("/home");
      }, 3000);
    } catch (err: any) {
      console.log(err.response.data.error);
      setText(err.response.data.error);
      console.log(username);
    }
  };
  return (
    <div className="flex gap-2 flex-col">
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

      <button
        className="p-2  absolute end-0 bottom-0 bg-yellow-500 text-black rounded hover:bg-yellow-400 "
        onClick={axiosRequest}
        title="Enter in your account"
      >
        Entrar
      </button>

      {text ? <p className="text-sm text-red-500">{text}</p> : null}
      {sucess ? (
        <p className="text-sm text-green-600 sucess">{sucess}</p>
      ) : null}

      {warn && <p className="text-sm text-orange-500">{warn}</p>}
    </div>
  );
}
