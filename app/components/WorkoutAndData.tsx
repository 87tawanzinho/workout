"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { workoutI } from "../interfaces/geral";
import { useRouter } from "next/navigation";
import Image from "next/image";
import deleting from "@/public/del.png";
import training from "@/public/metas.png";
import trainingBanner from "@/public/training-model-banner.png";
import logout from "@/public/logout.png";

import TextJSX from "./texts";
import ImageEditTsx from "./Image";
export default function StorageName() {
  const [username, setUsername] = useState(null);
  const [onMouse, setOnMouse] = useState(false);
  const [id, setId] = useState(false);
  const [warn, setWarn] = useState("");
  const [data, setData] = useState<workoutI[]>([]);
  const { push } = useRouter();

  const axiosRequest = async () => {
    if (username !== null) {
      try {
        const response = await axios.post(
          "https://workout-api-taws-projects.vercel.app/showExercises",
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

    const IdUser = (): any => {
      if (typeof window !== "undefined" && window.localStorage) {
        // Check if localStorage is available
        return localStorage.getItem("id");
      }
    };
    setUsername(storageName());
    setId(IdUser());
    const fetchData = async () => {
      await axiosRequest();
    };
    fetchData();
  }, [username]);

  function onMouseon() {
    if (onMouse) {
      return " bg-black p-2 text-white transition-all rounded";
    } else {
      return "";
    }
  }

  async function deleteWork(idItem: string) {
    setWarn("Deletando, aguarde..");
    try {
      await axios.delete(
        `https://workout-api-taws-projects.vercel.app/deleteExercise/${id}`,
        {
          data: { idGym: idItem },
        }
      );
      await axiosRequest();
      setWarn("");
    } catch (err) {
      console.log(err);
    }
  }
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
              <Image src={logout} alt="logout" height={24} width={24} />
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

          <p className="text-sm text-black">
            acompanhe sua vida com responsabilidade
          </p>
        </div>
        <div className="flex justify-between  items-center mt-24">
          <div>
            <h2 className="text-xl">
              Minhas <span className="font-bold">Tarefas</span>
            </h2>
          </div>

          <div className=" flex items-center gap-2 justify-center">
            <ImageEditTsx
              isMeta={false}
              urlImg={trainingBanner}
              ApiUrl={`https://workout-api-taws-projects.vercel.app/createExercise/${username}`}
              title="Nova tarefa"
              content="Parabéns, continue assim, você está se tornando alguém incrível."
            />
          </div>
        </div>
        {/* workouts and add*/}
        <TextJSX msg1="Treinos" msg2="Data" />
        {data.map((workout) => {
          return (
            <div
              className={`flex justify-between mt-2 text-xs  break-all transition-all ${onMouseon()}  `}
              key={workout._id}
              onMouseOver={() => {
                setOnMouse(true);
              }}
              onMouseLeave={() => {
                if (!onclick) {
                  setOnMouse(false);
                }
              }}
            >
              <div className="flex-col  break-words ">
                <p className="">{workout.description}</p>
              </div>
              <div className="flex-col text-red-600">
                {onMouse ? (
                  <p
                    className="cursor-pointer hover:text-purple-800  "
                    onClick={() => {
                      deleteWork(workout._id);
                    }}
                  >
                    <Image
                      src={deleting}
                      alt="delete"
                      height={24}
                      width={24}
                      title="delete"
                    />
                  </p>
                ) : (
                  <p>{workout.data}</p>
                )}
                {warn && <p className="text-orange-800">{warn}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
