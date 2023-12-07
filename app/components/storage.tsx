"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { workoutI } from "../interfaces/geral";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
export default function StorageName() {
  const [username, setUsername] = useState(null);
  const [data, setData] = useState<workoutI[]>([]);
  const { push } = useRouter();
  const axiosRequest = async () => {
    if (username !== null) {
      try {
        const response = await axios.post(
          "http://localhost:3200/showExercises",
          {
            user: username,
          }
        );
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    const storageName = (): any => {
      if (typeof window !== "undefined" && window.localStorage) {
        // Check if localStorage is available
        return localStorage.getItem("username");
      }
    };
    setUsername(storageName());

    const fetchData = async () => {
      await axiosRequest();
    };
    fetchData();
  }, [username]);

  return (
    <main className="flex flex-col items-center pt-4 ">
      <div className="w-5/6  max-w-2xl">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl  end-0">
              Olá, <span className="text-purple-950">{username} </span>💪🫡
            </p>
            <p className="text-sm w-48 mt-2">
              Acompanhe seus treinos por aqui e nunca mais se perca 🤞✌️
            </p>
          </div>
          <p
            className="text-sm text-white bg-purple-800 rounded p-2 cursor-pointer hover:bg-red-900"
            onClick={() => {
              localStorage.removeItem("username");
              push("/");
            }}
          >
            Desconectar
          </p>
        </div>
        <div className="flex justify-between  items-center mt-24">
          <div>
            <h2 className="text-xl">
              Meus <span className="text-red-600">Treinos</span>
            </h2>
          </div>

          <Modal username={username} />
        </div>
        {/* workouts and add*/}
        <div className="flex justify-between text-zinc-600 text-sm mb-4 mt-4">
          <p>Treinado</p>
          <p>Data</p>
        </div>
        {data.map((workout) => {
          return (
            <div
              className="flex justify-between mt-2 text-xs  break-all "
              key={workout._id}
            >
              <div className="flex-col max-w-42 ">
                <p className="">{workout.description}</p>
              </div>
              <div className="flex-col text-red-600">
                <p>{workout.data}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
