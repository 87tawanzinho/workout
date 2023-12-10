"use client";
import Image, { StaticImageData } from "next/image";
import edit from "@/public/edit.png";
import { useState } from "react";
import ModalAll from "./Modal";

interface NewAndEdit {
  title: string;
  content: string;
  isMeta: boolean;
  urlImg: StaticImageData;
  ApiUrl: string;
}
export default function ImageEditTsx({
  title,
  content,
  isMeta,
  ApiUrl,
  urlImg,
}: NewAndEdit) {
  const [isOpen, setOpen] = useState(false);
  const [textarea, setTextarea] = useState("");
  const [Data, setData] = useState("");
  function takeValueText(e: any) {
    setTextarea(e.target.value);
  }

  function setFalse() {
    setOpen(false);
  }
  function handleOpenModal() {
    setOpen(true);
  }

  function takingData(e) {
    setData(e.target.value);
  }
  return (
    <div className="flex justify-center items-center gap-4">
      <p
        className="text-2xl font-bold cursor-pointer  hover:text-green-400"
        onClick={handleOpenModal}
      >
        +
      </p>

      {isOpen ? (
        <ModalAll
          isOpen={true}
          setOpen={setFalse}
          ApiUrl={ApiUrl}
          description={textarea}
          data={Data}
        >
          <Image src={urlImg} alt="img" height={100} width={400}></Image>
          <h2 className="text-gray-800 text-xl">{title}</h2>
          <p className="text-gray-500 text-xs">{content}</p>
          <textarea
            onChange={takeValueText}
            placeholder="vamos começar?"
            className="text-xs mt-4 bg-gray-300 h-20 p-2 w-4/5  rounded"
          />

          {!isMeta ? (
            <input
              type="date"
              className="rounded-lg bg-white mt-4"
              onChange={takingData}
            ></input>
          ) : null}
        </ModalAll>
      ) : null}
    </div>
  );
}
