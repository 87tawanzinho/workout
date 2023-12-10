import axios from "axios";
import { useState } from "react";

interface ModalI {
  isOpen: boolean;
  setOpen: () => void;
  children: React.ReactNode;
  ApiUrl: string;
  description: string;
  data: string;
}
export default function ModalAll({
  isOpen,
  setOpen,
  children,
  ApiUrl,
  description,
  data,
}: ModalI) {
  const [sucess, setSucess] = useState("");
  const [fail, setFail] = useState("");
  async function axiosRequest() {
    if (!data) {
      setFail("");

      if (!description) {
        return setFail("Você não preencheu nada.");
      }

      if (description.length >= 80) {
        return setFail("Sua cartinha está grande demais");
      }
      try {
        await axios.post(ApiUrl, {
          description: description,
        });
        setSucess("Sucesso, aguarde..");
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      } catch (err) {
        setFail("Ocorreu um erro, tente novamente.");
      }
    } else {
      if (!description) {
        return setFail("Você não preencheu nada.");
      }

      if (description.length >= 40) {
        return setFail("Seu treino está grande demais");
      }
      try {
        await axios.post(ApiUrl, {
          exercise: description,
          data: data
            .replace(/-/g, "/")
            .split("/") // transforma em array
            .reverse()
            .join("/"), // Inverte a ordem e junta com traços,
        });
        setSucess("Sucesso, aguarde..");
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      } catch (err) {
        setFail("Ocorreu um erro, tente novamente.");
      }
    }
  }
  return (
    <>
      {isOpen && (
        <div className="overflow-hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-5/6 max-w-2xl  rounded-lg flex  pb-4 items-center justify-center text-start flex-col   gap-2">
            {children}
            <div className="flex gap-2 justify-center items-center  mt-10 ">
              <button
                className="p-2 bg-green-700 text-white rounded-lg"
                onClick={axiosRequest}
              >
                Salvar
              </button>

              <button
                onClick={setOpen}
                className=" bg-red-500 text-white rounded p-2 rounded-lg"
              >
                Fechar
              </button>
            </div>
            {sucess && (
              <p className="text-md sucess text-green-600">{sucess}</p>
            )}
            {fail && <p className="text-sm text-red-600">{fail}</p>}
          </div>
        </div>
      )}
    </>
  );
}
