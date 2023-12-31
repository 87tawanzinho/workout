"use client";
import Image from "next/image";
import biceps from "@/public/biceps.jpg";
import giphy from "@/public/giphy.gif";
import edit from "@/public/edit.png";
import TextJSX from "./texts";
import del from "@/public/del.png";
import ImageEditTsx from "./Image";
import img from "@/public/img_metas.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { MetasI } from "../interfaces/geral";

export default function Metas() {
  const [data, setData] = useState<MetasI[]>([]);
  const [username, setUsername] = useState();
  const [id, setId] = useState();

  const axiosRequest = async () => {
    if (username !== null) {
      try {
        const response = await axios.post(
          "https://workout-api-taws-projects.vercel.app/showMetas",
          {
            user: username,
          }
        );

        setData(response.data.reverse());
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

    const setIdToUser = (): any => {
      if (typeof window !== "undefined" && window.localStorage) {
        return localStorage.getItem("id");
      }
    };
    setUsername(storageName());
    setId(setIdToUser);
    const fetchData = async () => {
      await axiosRequest();
    };
    fetchData();
  }, [username]);

  async function deleteMeta(idCart: any) {
    try {
      const newData = data.map((meta) => {
        if (meta._id === idCart) {
          return { ...meta, warn: "Deletando, aguarde..." };
        }
        return meta;
      });

      setData(newData);

      // Realize a exclusão
      await axios.delete(
        `https://workout-api-taws-projects.vercel.app/deleteMeta/${id}`,
        {
          data: { MetaToDelete: idCart },
        }
      );

      // Atualize a propriedade 'warn' para a carta específica
      const updatedData = newData.map((meta) => {
        if (meta._id === idCart) {
          return { ...meta, warn: "" };
        }
        return meta;
      });

      setData(updatedData);

      await axiosRequest();
    } catch (error) {
      console.error(error);
      // Atualize a propriedade 'warn' para indicar erro
      const errorData = data.map((meta) => {
        if (meta._id === idCart) {
          return { ...meta, warn: "Erro ao deletar. Tente novamente." };
        }
        return meta;
      });

      setData(errorData);
    }
  }

  return (
    <div className="text-end  p-8 pt-14 flex flex-col ">
      <div className="flex justify-center items-center">
        <Image src={giphy} alt="women training" height={150} width={150} />
      </div>

      <div className="mt-10">
        <div className="flex justify-between flex-row-reverse  items-center">
          <p className="text-xl">
            <span className="font-bold">Metas</span> e anotações
          </p>

          <ImageEditTsx
            title="Criar uma nova meta"
            content="suas cartinhas serão registradas aqui"
            isMeta={true}
            ApiUrl={`https://workout-api-taws-projects.vercel.app/createMeta/${username}`}
            urlImg={img}
          />
        </div>
        <p className="text-xs text-orange-800">
          coloque seus sonhos e objetivos por aqui!
        </p>
        <div className="ml-4">
          <TextJSX msg1="Organize suas metas pessoais por aqui" />
          <div className="h-1 bg-black"></div>
        </div>
        <div className="flex gap-1 mt-4 items-center justify-center flex-wrap">
          {data.map((metas) => (
            <div
              className={`h-48  widthMeta bg-orange-800  overflow-y-auto relative text-white rounded flex items-center justify-center`}
              key={metas._id}
            >
              <p className="absolute top-2 rigth-0 end-2 cursor-pointer flex ">
                {metas.warn && (
                  <p className="text-xs text-yellow-100">{metas.warn}</p>
                )}
                <Image
                  src={del}
                  alt="del"
                  height={24}
                  width={24}
                  onClick={() => {
                    deleteMeta(metas._id);
                  }}
                />
              </p>

              <p className="break-words text-center">{metas.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
