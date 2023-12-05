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

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const axiosRequest = async (): Promise<any> => {
    try {
      const api: ApiI = await axios.post("http://localhost:3200/login", {
        user: username,
        password: password,
      });
      const token = api.data.token;
      const decoded: any = jwtDecode(token);
      localStorage.setItem("username", decoded.username);
      push("/home");
    } catch (err: any) {
      alert("please check");
      console.log(err.response.data);
      console.log(username);
    }
  };
  return (
    <div className="flex gap-2 flex-col">
      <input
        type="text"
        placeholder="user"
        value={username}
        onChange={handleUsername}
        className="p-2 rounded"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePassword}
        className="p-2 rounded"
      />

      <button
        className="p-2  absolute end-0 bottom-0 bg-yellow-500 text-black rounded hover:bg-yellow-400 "
        onClick={axiosRequest}
        title="Enter in your account"
      >
        Sign in
      </button>
    </div>
  );
}
