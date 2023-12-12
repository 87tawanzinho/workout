import axios from "axios";
import { MouseEventHandler, useState } from "react";

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
  const [clicked, setClicked] = useState(false);
  const [warn, setWarn] = useState("");
  async function axiosRequest() {
    setClicked(true);
    setWarn("Espere um pouco, estamos tentando criar...");
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
        setClicked(false);
        setFail("Ocorreu um erro, tente novamente.");
      }
    } else {
      if (!description) {
        setClicked(false);
        return setFail("Você não preencheu nada.");
      }

      if (description.length >= 40) {
        setClicked(false);
        return setFail("Seu treino está grande demais");
      }
      try {
        if (!clicked) {
          await axios.post(ApiUrl, {
            exercise: description,
            data: data
              .replace(/-/g, "/")
              .split("/") // transforma em array
              .reverse()
              .join("/"), // Inverte a ordem e junta com traços,
          });
          setFail("");
          setSucess("Sucesso, aguarde..");
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        }
      } catch (err) {
        setFail("Ocorreu um erro, tente novamente.");
      }
    }
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();

    if (!clicked) {
      const result = await axiosRequest();
      // Lógica adicional aqui, se necessário

      // Exemplo de como usar o resultado
      console.log(result);
    }
  };
  return (
    <>
      {isOpen && (
        <div className="overflow-hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="ob w-5/6 max-w-2xl  rounded-lg flex  pb-4 items-center justify-center text-start flex-col ">
            {children}
            <div className="flex gap-2 justify-center items-center  mt-2 ">
              <button
                className="p-2 bg-orange-700 text-gray-300 rounded-lg w-32"
                onClick={handleClick}
              >
                Salvar
              </button>

              <button
                onClick={setOpen}
                className=" bg-black text-gray-300 rounded p-1 rounded-lg"
              >
                Fechar
              </button>
            </div>
            {sucess && (
              <p className="text-xs sucess mt-2 text-green-600">{sucess}</p>
            )}
            {fail && <p className="text-xs mt-2 text-red-600">{fail}</p>}

            {!sucess && !fail ? (
              <p className="text-xs mt-2 sucess text-orange-600 text-center">
                {warn}
              </p>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
