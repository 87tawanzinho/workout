"use client";
import axios from "axios";
import { useState } from "react";

export default function FormRegister() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

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
    if (password !== passwordConfirm) {
      return alert("Password and ConfirmPassword not the same.");
    }
    try {
      const api = await axios.post("http://localhost:3200/", {
        user: username,
        password: password,
      });
      console.log(api);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="flex flex-col gap-2">
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
      <input
        type="password"
        placeholder="password confirm"
        value={passwordConfirm}
        onChange={handleConfirmPassword}
        className="p-2 rounded"
      />
      <button
        className="p-2  absolute end-0 bottom-0 bg-yellow-500 text-black rounded hover:bg-yellow-400 "
        onClick={axiosRequest}
      >
        Sign Up
      </button>
    </div>
  );
}
