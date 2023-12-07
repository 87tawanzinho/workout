import axios from "axios";
import { useEffect, useState } from "react";

export default function Modal({ username }: any) {
  const [create, setCreate] = useState(false);
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");
  const [fail, setFail] = useState("");
  const [sucess, setSucess] = useState("");
  async function createExerciseAPI() {
    if (!description || !data) {
      setCreate(true);
      return setFail("Preencha todos os campos");
    }
    try {
      await axios.post(`http://localhost:3200/createExercise/${username}`, {
        exercise: description,
        data: data
          .toString()
          .replace(/-/g, "/")
          .split("/") // transforma em array
          .reverse()
          .join("/"), // Inverte a ordem e junta com traços,
      });
      setFail("");
      setCreate(true);
      setSucess("Registro criado com sucesso");
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    } catch (e) {
      console.log(e);
    }
  }

  function descriptionHandle(e) {
    setDescription(e.target.value);
  }
  function dataHandle(e) {
    setData(e.target.value);
  }
  return (
    <div className="">
      {!create ? (
        <p
          className="text-4xl cursor-pointer hover:text-green-600"
          title="add"
          onClick={() => {
            setCreate(!create);
          }}
        >
          +
        </p>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen  bg-neutral-500 absolute top-0 bottom-0  left-0 right-0">
          <div className="flex flex-col rounded  bg-white h-64  w-80 py-4 ">
            <div className="flex justify-between items-center ">
              <p className=" text-center text-gray-600 text-start text-sm ml-2 ">
                Registrar um novo treino
              </p>
              <p
                onClick={() => {
                  setCreate(!create);
                }}
                className="text-md mr-4 text-red-600   cursor-pointer hover:text-red-900 "
              >
                x
              </p>
            </div>

            <div className="flex justify-center flex-col items-center gap-2 mt-8    ">
              <input
                placeholder="Descrição"
                onChange={descriptionHandle}
                className="bg-white text-black p-2 w-48 text-sm"
              ></input>
              <input
                placeholder="Data"
                onChange={dataHandle}
                className="p2 bg-gray-400 text-black  w-48 text-sm"
                type="date"
              ></input>
              <button
                className="bg-red-400 p-2 rounded mt-4 animation"
                onClick={async () => {
                  await createExerciseAPI();
                }}
              >
                Salvar
              </button>
              {fail ? (
                <p className="text-sm text-red-600">{fail}</p>
              ) : (
                <p className="text-sm text-green-600">{sucess}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
