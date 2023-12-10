"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { workoutI } from "../interfaces/geral";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import Image from "next/image";
import training from "@/public/training.jpg"
import logout from "@/public/logout.png"
import edit from "@/public/edit.png"
import TextJSX from "./texts";
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
      <div className="w-5/6  w-5/6  max-w-2xl">
        <div className="flex justify-between items-center">
        
           <div>
           <p className="text-xl  end-0">
              Olá, <span className=" font-bold">{username}</span>!
            </p>
           </div>

           <div className="justify-center items-center flex gap-2">

    
            
            <p className="text-xs">desconectar</p>

            <p
            className="text-sm text-white rounded-full p-2 cursor-pointer "
            onClick={() => {
              localStorage.removeItem("username");
              push("/");
            }}
          >
           <Image 
           src={logout}
           alt="logout"
           height={24}
           width={24}
           />
          </p>

           </div>
       

        </div>
        <div className="justify-center flex flex-col items-center">
        <Image
           className="mt-10"
           src={training}
           alt="imagem treino"
           height={150}
           width={150}
           />

           <p className="text-sm text-gray-400">acompanhe seus treinos com responsabilidade</p>
        </div>
        <div className="flex justify-between  items-center mt-24">
          <div>
            <h2 className="text-xl">
              Meus <span className="font-bold">Treinos</span>
            </h2>
          </div>

          <div className=" flex items-center gap-2 justify-center">
          <Modal username={username} />
            <Image 
            className="mt-1 cursor-pointer edit"
            src={edit}
            alt="edit"
            height={24}
            width={24}
            />
          </div>
        </div>
        {/* workouts and add*/}
        <TextJSX
        msg1 = "Treinos"
        msg2 = "Data"
        />
        {data.map((workout) => {
          return (
            <div
              className="flex justify-between mt-2 text-xs  break-all  "
              key={workout._id}
            >
              <div className="flex-col  break-words ">
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
